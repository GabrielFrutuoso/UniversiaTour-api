import { Prisma } from "@prisma/client";
import { Activity } from "../entities/activity.entity";
import { IsNumber, IsOptional, IsString } from "class-validator";

export class CreateActivityDto {
    @IsOptional()
    id?: number;

    @IsString()
    description: string;

    @IsNumber()
    touristicId: number;

    @IsString()
    userId: string;

}
