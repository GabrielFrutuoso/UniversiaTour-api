import { Injectable } from '@nestjs/common';
import { CreateActivityDto } from './dto/create-activity.dto';
import { UpdateActivityDto } from './dto/update-activity.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ActivitiesService {
  constructor(private readonly prisma: PrismaService) {}

  create(createActivityDto: CreateActivityDto) {
    return this.prisma.activities.create({ data: createActivityDto});
  }

  findAll() {
    return this.prisma.activities.findMany({ include: { touristic: true } });
  }
 
  findOne(id: number) {
    return this.prisma.activities.findUnique({ where: { id }, include: { touristic: true, }});
  } 
  update(id: number, updateActivityDto: UpdateActivityDto) {
    return this.prisma.activities.update({ where: { id }, data: { ...updateActivityDto } });
  }

  remove(id: number) {
    return this.prisma.activities.delete({ where: { id } });
  }
}
