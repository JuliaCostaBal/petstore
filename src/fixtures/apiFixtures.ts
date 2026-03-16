import { test as base } from '@playwright/test'
import { ApiClient } from '../api/apiClient'
import { PetService } from '../services/petService'
import { StoreService } from '../services/storeService'

type ApiFixtures = {
    apiClient: ApiClient
    petService: PetService
    storeService: StoreService
}

export const test = base.extend<ApiFixtures>({
    apiClient: async ({ request }, use) => {
        const client = new ApiClient(request)
        await use(client)
    },

    petService: async ({ apiClient }, use) => {
        const service = new PetService(apiClient)
        await use(service)
    },

    storeService: async ({ apiClient }, use) => {
        const service = new StoreService(apiClient)
        await use(service)
    }
})

export const expect = test.expect