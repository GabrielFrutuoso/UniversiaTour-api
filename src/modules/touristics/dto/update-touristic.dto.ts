import { PartialType } from '@nestjs/mapped-types';
import { CreateTouristicDto } from './create-touristic.dto';

export class UpdateTouristicDto extends PartialType(CreateTouristicDto) {}
