import { Pet } from '../models/pet'
import {Order} from "../models/order";

export type PetStatus = 'available' | 'pending' | 'sold'

export function generatePet(status: PetStatus): Pet {
    const id = Date.now() + Math.floor(Math.random() * 1000);
    return {
        id,
        name: `pet_${id}`,
        status
    }
}

export function generateOrder(petId: number): Order {
    const id = Date.now() + Math.floor(Math.random() * 1000);
    return {
        id,
        petId,
        quantity: 1,
        status: 'placed',
        complete: true
    }
}