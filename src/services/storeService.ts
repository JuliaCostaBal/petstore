import { ApiClient } from '../api/apiClient'

export class StoreService {

    constructor(private client: ApiClient) {}

    async createOrder(order: any) {
        return await this.client.post('/v2/store/order', order)
    }

}