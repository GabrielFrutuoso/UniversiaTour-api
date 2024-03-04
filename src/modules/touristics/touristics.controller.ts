import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TouristicsService } from './touristics.service';
import { CreateTouristicDto } from './dto/create-touristic.dto';
import { UpdateTouristicDto } from './dto/update-touristic.dto';
import { IsPublic } from '../auth/decorators/is-public.decorator';

@Controller('touristics')
export class TouristicsController {
  constructor(private readonly touristicsService: TouristicsService) {}

  @Post()
  create(@Body() createTouristicDto: CreateTouristicDto) {
    return this.touristicsService.create(createTouristicDto);
  }

  @IsPublic()
  @Get()
  findAll() {
    return this.touristicsService.findAll();
  }

  @IsPublic()
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.touristicsService.findOne(+id);
  }
  
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTouristicDto: UpdateTouristicDto) {
    return this.touristicsService.update(+id, updateTouristicDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.touristicsService.remove(+id);
  }
}
