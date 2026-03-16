import { Pet } from '../models/pet'

export type PetStatus = 'available' | 'pending' | 'sold'

export function generatePet(status: PetStatus): Pet {
    const id = Date.now() + Math.floor(Math.random() * 1000)
    return {
        id,
        name: `pet_${id}`,
        status
    }
}