import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UUID } from 'crypto';
import { IsPublic } from '../auth/decorators/is-public.decorator';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @IsPublic()
  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }


  @Get(':id')
  async findOne(@Param('id') id: UUID) {
    return await this.userService.findOne(id)
  }

  @Patch(':id')
  update(@Param('id') id: UUID, @Body() updateUserDto: UpdateUserDto) {
    return this.userService.update(id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id:UUID) {
    return this.userService.remove(id);
  }
}
