import { PartialType } from '@nestjs/mapped-types';
import { CreateDestinyDto } from './create-destiny.dto';
import { Prisma } from '@prisma/client';

export class UpdateDestinyDto extends PartialType(CreateDestinyDto) {}
