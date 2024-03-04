import { Prisma } from "@prisma/client";
import { IsNumber, IsOptional, IsString } from "class-validator";

export class CreateActivityDto implements Prisma.activitiesUncheckedCreateInput {
    @IsNumber()
    id?: number;

    @IsString()
    description: string;

    @IsNumber()
    touristic_id: number;

    @IsString()
    user_id: string;

}