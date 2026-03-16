import { ApiClient } from '../api/apiClient'

export class PetService {

    constructor(private client: ApiClient) {}

    async createPet(pet: any) {
        return await this.client.post('/pet', pet)
    }

    async getPetById(id: number) {
        return await this.client.get(`/pet/${id}`)
    }

    async findByStatus(status: string) {
        return await this.client.get(`/pet/findByStatus?status=${status}`)
    }

}