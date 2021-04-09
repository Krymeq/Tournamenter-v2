import { Module } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { FileController } from "./file.controller";
import { FileService } from "./file.service";

@Module({
    imports: [ConfigService],
    providers: [FileService],
    controllers: [FileController],
    exports: [FileService]
})
export class FileModule {}