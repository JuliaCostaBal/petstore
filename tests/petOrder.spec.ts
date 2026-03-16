import { test, expect } from '@playwright/test'
import { ApiClient } from '../src/api/apiClient'
import { PetService } from '../src/services/petService'
import { StoreService } from '../src/services/storeService'
import {generateOrder} from "../src/utils/dataGenerator";

let selectedPets: any[] = []

test.describe('Pet order flow', () => {
    test.beforeAll(async ({ request }) => {
        const client = new ApiClient(request);
        const petService = new PetService(client);

        const response = await petService.findByStatus('available');
        const pets = await response.json();
        selectedPets = pets.slice(0, 5);
    })

    test('List available pets and store five of them', async () => {
        expect(Array.isArray(selectedPets)).toBeTruthy();
        expect(selectedPets.length).toBeGreaterThan(0);

        for (const pet of selectedPets) {
            expect(pet).toHaveProperty('id');
        }

    });

    test('Create an order for each stored pet', async ({ request }) => {
        const client = new ApiClient(request);
        const storeService = new StoreService(client);

        for (const pet of selectedPets) {
            const order = generateOrder(pet.id);
            const response = await storeService.createOrder(order);

            expect(response.status()).toBe(200);
            const body = await response.json();

            expect(body.petId).toBe(pet.id);
            expect(body.status).toBe('placed');
        }
    });
})