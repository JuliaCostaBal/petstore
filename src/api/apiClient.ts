import { APIRequestContext } from '@playwright/test'

export class ApiClient {

    constructor(private request: APIRequestContext) {}

    async get(endpoint: string) {
        return await this.request.get(endpoint)
    }

    async post(endpoint: string, payload: any) {
        return await this.request.post(endpoint, {
            data: payload
        })
    }

    async put(endpoint: string, payload: any) {
        return await this.request.put(endpoint, {
            data: payload
        })
    }

    async delete(endpoint: string) {
        return await this.request.delete(endpoint)
    }

}