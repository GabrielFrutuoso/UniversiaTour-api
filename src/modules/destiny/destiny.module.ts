import { Module } from '@nestjs/common';
import { DestinyService } from './destiny.service';
import { DestinyController } from './destiny.controller';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  imports: [],
  controllers: [DestinyController],
  providers: [DestinyService, PrismaService],
})
export class DestinyModule {}
