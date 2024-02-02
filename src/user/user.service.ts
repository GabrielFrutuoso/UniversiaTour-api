import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { UUID } from 'crypto';

@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) {}

  async create(data) {
    return await this.prisma.user.create({ 
      data: {
        ...data
      }
     });
  }

  

  async findAll() {
    return await this.prisma.user.findMany();
  }

  async findOne(id: UUID) {
    let user = await this.prisma.user.findUnique({ where: { id } });
    return user = {  ...user, password: undefined };
  }

  update(id: UUID, updateUserDto: UpdateUserDto) {
    const existsUser = this.prisma.user.findUnique({ where: { id: updateUserDto.id } });

    if (existsUser) {
      return this.prisma.user.update({
      where: { id },
      data: updateUserDto,
    });

    } else {
      throw new Error('User not found');
    }

  }

  remove(id: UUID) {
    return this.prisma.user.delete({ where: { id } });
  }
}
