import { Injectable } from "@nestjs/common";
import * as fs from 'fs';

@Injectable()
export class FileService {
    saveFile(path: string, file: Express.Multer.File) {
        if (!fs.existsSync(path)) {
            fs.writeFileSync(path, file.buffer);
        } 
        else throw new Error("File already exists");
    }
}
