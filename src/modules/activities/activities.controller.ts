import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ActivitiesService } from './activities.service';
import { CreateActivityDto } from './dto/create-activity.dto';
import { UpdateActivityDto } from './dto/update-activity.dto';
import { IsPublic } from '../auth/decorators/is-public.decorator';

@Controller('activities')
export class ActivitiesController {
  constructor(private readonly activitiesService: ActivitiesService) {}

  @Post()
  create(@Body() createActivityDto: CreateActivityDto) {
    return this.activitiesService.create(createActivityDto);
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.activitiesService.findByUserId(id);
  }

  @Patch(':id')
  update(@Param('id') id: number, @Body() updateActivityDto: UpdateActivityDto) {
    return this.activitiesService.update(id, updateActivityDto);
  }

  @IsPublic()
  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.activitiesService.remove(id);
  }
}
