import { Module } from '@nestjs/common';
import { TouristicsService } from './touristics.service';
import { TouristicsController } from './touristics.controller';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  imports: [],
  controllers: [TouristicsController],
  providers: [TouristicsService, PrismaService],
})
export class TouristicsModule {}
