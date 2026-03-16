import { test, expect } from '../src/fixtures/apiFixtures'
import { generatePet } from '../src/utils/dataGenerator'

let soldPetId: number;

test.describe('Pet creation flow', () => {

    test('Create pets with different statuses', async ({ petService }) => {
        const statuses = [
            ...Array(5).fill('available'),
            ...Array(4).fill('pending'),
            'sold'
        ]

        for (const status of statuses) {
            const pet = generatePet(status);
            const response = await petService.createPet(pet);

            expect(response.status()).toBe(200);
            expect(response.headers()['content-type']).toContain('application/json');

            const body = await response.json();
            expect(body).toHaveProperty('id');
            expect(body.name).toBe(pet.name);
            expect(body.status).toBe(status);

            if (status === 'sold') {
                soldPetId = body.id;
            }
        }
    });

    test('Get details of pet with status sold', async ({ petService }) => {
        const response = await petService.getPetById(soldPetId);

        expect(response.status()).toBe(200);
        const body = await response.json();

        expect(body.id).toBe(soldPetId);
        expect(body.status).toBe('sold');
    });
})
