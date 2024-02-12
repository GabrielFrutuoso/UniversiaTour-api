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

  findByDestiny(destiniesId: number) {
    return this.prisma.touristics.findMany({ where: { destiniesId }, include: { images: true } });
  }

  findOne(id: number) {
    return this.prisma.touristics.findUnique({ where: { id }, include: { images: true } });
  }

  update(id: number, updateTouristicDto: UpdateTouristicDto) {
    return this.prisma.touristics.update({
      where: { id },
      data: { ...updateTouristicDto },
    });
  }

  remove(id: number) {
    return this.prisma.touristics.delete({ where: { id } });
  }
}
