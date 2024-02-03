import { Injectable } from '@nestjs/common';
import { CreateTouristicDto } from './dto/create-touristic.dto';
import { UpdateTouristicDto } from './dto/update-touristic.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class TouristicsService {
  constructor(private readonly prisma: PrismaService) {}
  create(createTouristicDto: CreateTouristicDto) {
    return 'This action adds a new touristic';
  }

  findAll() {
    return this.prisma.touristics.findMany({ include: { images: true } });
  }

  findOne(id: number) {
    return `This action returns a #${id} touristic`;
  }

  update(id: number, updateTouristicDto: UpdateTouristicDto) {
    return `This action updates a #${id} touristic`;
  }

  remove(id: number) {
    return `This action removes a #${id} touristic`;
  }
}
