import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ActivitiesService } from './activities.service';
import { CreateActivityDto } from './dto/create-activity.dto';
import { UpdateActivityDto } from './dto/update-activity.dto';
import { UUID } from 'crypto';
import { IsPublic } from '../auth/decorators/is-public.decorator';

@Controller('activities')
export class ActivitiesController {
  constructor(private readonly activitiesService: ActivitiesService) {}

  @Post()
  create(@Body() createActivityDto: CreateActivityDto) {
    return this.activitiesService.create(createActivityDto);
  }

  @IsPublic()
  @Get(':id')
  findOne(@Param('id') id: UUID) {
    return this.activitiesService.findByUserId(id);
  }

  // @Patch(':id')
  // update(@Param('id') id: UUID, @Body() updateActivityDto: UpdateActivityDto) {
  //   return this.activitiesService.update(id, updateActivityDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: UUID) {
  //   return this.activitiesService.remove(id);
  // }
}
