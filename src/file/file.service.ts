import { File } from 'multer';
import { Injectable } from '@nestjs/common';
import { createWriteStream } from 'fs';
import * as streamifier from 'streamifier';
import { join } from 'path';

@Injectable()
export class FileUploadService {
  async uploadFile(file: File): Promise<string> {
    const { originalname, buffer } = file;
    const filePath = join(__dirname, '..', 'uploads', originalname);
    const writeStream = createWriteStream(filePath);

    await new Promise((resolve, reject) => {
      const readStream = streamifier.createReadStream(buffer);
      readStream.pipe(writeStream);
      writeStream.on('finish', resolve);
      writeStream.on('error', reject);
    });

    return filePath;
  }
}
