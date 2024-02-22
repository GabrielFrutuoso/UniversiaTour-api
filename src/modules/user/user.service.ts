import { HttpStatus, Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { UUID } from 'crypto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) {}
  create(createUserDto: CreateUserDto) {
    const encryptedPassword = bcrypt.hashSync(createUserDto.password, 10);

    return this.prisma.user.create({ 
      data: { ...createUserDto, password: encryptedPassword }
    });
  }

  async findOne(id: UUID) {
    const user = await this.prisma.user.findUnique({ where: { id }, include: { activities: true } });

    if (user) {
      return await { ...user, password: undefined }
    }

    throw new NotFoundException("user not found :(");
  }

  async update(id: UUID, updateUserDto: UpdateUserDto) {
    try {
      return this.prisma.user.update({ where: { id }, data: updateUserDto })
    } catch (error) {
      error.status = HttpStatus.BAD_REQUEST;
    }
  }

  async remove(id: UUID) {
    const user = await this.prisma.user.findUnique({ where: { id } });

    if (user) {
      return this.prisma.user.delete({ where: { id } });
    } else {
      throw new NotFoundException("user not found :(");
    }
  }

  async findByEmail(email: string) {
    const user = await this.prisma.user.findUnique({ where: { email }, include: { activities: true } });

    if (user) {
      return  {...user }
    } else {
      return new NotFoundException("user not found :(");
    }
  }
}
