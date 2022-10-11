import { Module, CacheModule } from "@nestjs/common";
import { CacheService } from "./cache.service";

@Module({
    imports: [CacheModule.register()],
    providers: [CacheService],
    exports: [CacheService]    
})
export class CacheServiceModule {}