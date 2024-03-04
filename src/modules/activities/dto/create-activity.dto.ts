import { Prisma } from "@prisma/client";
import { Activity } from "../entities/activity.entity";
import { IsNumber, IsOptional, IsString } from "class-validator";

export class CreateActivityDto implements Prisma.activitiesUncheckedCreateInput {
    @IsNumber()
    id?: number;

    @IsString()
    description: string;

    @IsNumber()
    touristic_id: number;

    @IsNumber()
    user_id: string;
}