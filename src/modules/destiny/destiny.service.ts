import { Injectable } from '@nestjs/common';
import { CreateDestinyDto } from './dto/create-destiny.dto';
import { UpdateDestinyDto } from './dto/update-destiny.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class DestinyService {
  constructor(private readonly prisma: PrismaService) {}
  create(createDestinyDto: CreateDestinyDto) {
    return this.prisma.destinies.create({ data: createDestinyDto });
  }

  findAll() {
    return this.prisma.destinies.findMany({ include: { touristics: true } });
  }

  findOne(id: number) {
    return `This action returns a #${id} destiny`;
  }

  update(id: number, updateDestinyDto: UpdateDestinyDto) {
    return `This action updates a #${id} destiny`;
  }

  remove(id: number) {
    return `This action removes a #${id} destiny`;
  }
}
