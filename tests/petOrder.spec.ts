import { test, expect } from '../src/fixtures/apiFixtures'
import {generateOrder} from "../src/utils/dataGenerator";

let selectedPets: any[] = []

test.describe('Pet order flow', () => {

    test.beforeAll(async ({ petService }) => {
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

    test('Create an order for each stored pet', async ({ storeService }) => {
        for (const pet of selectedPets) {
            const order = generateOrder(pet.id);
            const response = await storeService.createOrder(order);

            expect(response.status()).toBe(200);
            expect(response.headers()['content-type']).toContain('application/json');

            const body = await response.json();
            expect(body).toHaveProperty('petId');
            expect(body.petId).toBe(pet.id);
            expect(body.status).toBe('placed');
        }
    });
})