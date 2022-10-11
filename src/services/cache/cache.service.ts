import { Inject, CACHE_MANAGER } from "@nestjs/common";
import { Cache } from "cache-manager";

export class CacheService {
    constructor(@Inject(CACHE_MANAGER) private cacheManager: Cache) {}

    async get(key: string) {
        const data = await this.cacheManager.get(key);
        return data;
    }
    
    async set(key: string, value: any, ttl?: number) {
        return await this.cacheManager.set(key, value, ttl ? ttl : 86400);
    }

    async delete(key: string) {
        return await this.cacheManager.del(key);
    }

    async reset() {
        return await this.cacheManager.reset();
    }
}