import { Controller, Get, InternalServerErrorException, Post, Query, Res, UploadedFile, UseInterceptors } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { FileInterceptor } from "@nestjs/platform-express";
import { Response } from "express";
import { FileService } from "./file.service";

@Controller("files")
export class FileController {
    constructor(private fileService: FileService,
                private configService: ConfigService) {}

    @Post('upload')
    @UseInterceptors(FileInterceptor('file', {limits: {fileSize: 10 * 1024 * 1024}}))
    async saveFile(@UploadedFile() file: Express.Multer.File) {
        const rootPath = this.configService.get('FILE_ROOT_PATH');
        if (!rootPath) throw new InternalServerErrorException('Could not load root path on the server');

        this.fileService.saveFile(`${rootPath}/${file.originalname}`, file);
    }
}