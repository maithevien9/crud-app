import { File } from 'multer';
import { FileUploadService } from './file.service';
import {
  Controller,
  Post,
  UseInterceptors,
  UploadedFile,
  UploadedFiles,
} from '@nestjs/common';
import { FileInterceptor, FilesInterceptor } from '@nestjs/platform-express';

@Controller('uploads')
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

  @Post('multiple')
  @UseInterceptors(FilesInterceptor('files', 10))
  async uploadMultipleFiles(@UploadedFiles() files: File[]) {
    const urls = await this.fileUploadService.uploadMultipleFiles(files);
    return { urls };
  }
}
