import { ApiClient } from '../api/apiClient'
import {Pet} from "../models/pet";

export class PetService {

    constructor(private client: ApiClient) {}

    async createPet(pet: Pet) {
        return await this.client.post('/v2/pet', pet)
    }

    async getPetById(id: number) {
        return await this.client.get(`/v2/pet/${id}`)
    }

    async findByStatus(status: string) {
        return await this.client.get(`/v2/pet/findByStatus?status=${status}`)
    }

}