import { Module } from '@nestjs/common';
import { FileUploadController } from './file.controller';
import { FileUploadService } from './file.service';

@Module({
  controllers: [FileUploadController],
  providers: [FileUploadService],
})
export class FileUploadModule {}
