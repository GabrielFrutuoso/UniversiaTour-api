import { Injectable } from '@nestjs/common';
import { CreateDestinyDto } from './dto/create-destiny.dto';
import { UpdateDestinyDto } from './dto/update-destiny.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class DestinyService {
  constructor(private readonly prisma: PrismaService) {}
  create(createDestinyDto: CreateDestinyDto) {
    return this.prisma.destinies.create({ data: { ...createDestinyDto } });
  }

  findAll() {
    return this.prisma.destinies.findMany({ include: { touristics: true } });
  }

  findOne(id: number) {
    return this.prisma.destinies.findUnique({ where: { id }, include: { touristics: true } });
  }

  update(id: number, updateDestinyDto: UpdateDestinyDto) {
    return this.prisma.destinies.update({
      where: { id },
      data: {...updateDestinyDto}
    });
  }

  remove(id: number) {
    return this.prisma.destinies.delete({ where: { id } });
  }
}
