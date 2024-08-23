import { File } from 'multer';
import { FileUploadService } from './file.service';
import {
  Controller,
  Post,
  UseInterceptors,
  UploadedFile,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller('upload')
export class FileUploadController {
  constructor(private readonly fileUploadService: FileUploadService) {}

  @Post()
  @UseInterceptors(
    FileInterceptor('file', {
      limits: { fileSize: 10 * 1024 * 1024 * 1024 },
    }),
  )
  async uploadFile(@UploadedFile() file: File) {
    const url = await this.fileUploadService.uploadFile(file);
    return { url };
  }
}
