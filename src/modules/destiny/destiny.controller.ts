import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DestinyService } from './destiny.service';
import { CreateDestinyDto } from './dto/create-destiny.dto';
import { UpdateDestinyDto } from './dto/update-destiny.dto';
import { IsPublic } from '../auth/decorators/is-public.decorator';

@Controller('destiny')
export class DestinyController {
  constructor(private readonly destinyService: DestinyService) {}

  @Post()
  create(@Body() createDestinyDto: CreateDestinyDto) {
    return this.destinyService.create(createDestinyDto);
  }

  @IsPublic()  
  @Get()
  findAll() {
    return this.destinyService.findAll();
  }
  
  @IsPublic()
  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.destinyService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: number, @Body() updateDestinyDto: UpdateDestinyDto) {
    return this.destinyService.update(+id, updateDestinyDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.destinyService.remove(id);
  }
}
