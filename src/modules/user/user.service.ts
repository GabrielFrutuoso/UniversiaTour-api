import { Injectable } from '@nestjs/common';
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

  findOne(id: UUID) {
    return this.prisma.user.findUnique({ where: { id, password: undefined }, include: { activities: true } });
  }

  update(id: UUID, updateUserDto: UpdateUserDto) {
    return this.prisma.user.update({ where: { id }, data: updateUserDto });
  }

  remove(id: UUID) {
    return this.prisma.user.delete({ where: { id } });
  }
}
