import {Module, Global} from '@nestjs/common';
import { FipeOfficialController } from './fipe-official.controller';
import { FipeOfficialService } from './fipe-official.service';

@Global()
@Module({
    imports: [],
    controllers: [FipeOfficialController],
    providers: [FipeOfficialService],
    exports: [FipeOfficialService]
})
export class FipeOfficialModule {}