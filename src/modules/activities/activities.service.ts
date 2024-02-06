import { Injectable } from '@nestjs/common';
import { CreateActivityDto } from './dto/create-activity.dto';
import { UpdateActivityDto } from './dto/update-activity.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { UUID } from 'crypto';

@Injectable()
export class ActivitiesService {
  constructor(private readonly prisma: PrismaService) {}
  create(createActivityDto: CreateActivityDto) {
    return ;
  }
 
  findByUserId(id: UUID) {
    return this.prisma.activities.findMany({ where: { userId: id } });
  }
 
  update(id: UUID, updateActivityDto: UpdateActivityDto) {
    return `This action updates a #${id} activity`;
  }

  remove(id: UUID) {
    return `This action removes a #${id} activity`;
  }
}
