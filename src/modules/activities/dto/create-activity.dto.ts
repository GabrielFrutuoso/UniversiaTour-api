import { Prisma } from "@prisma/client";
import { Activity } from "../entities/activity.entity";
import { IsNumber, IsOptional, IsString } from "class-validator";

export class CreateActivityDto implements Prisma.activitiesCreateInput {
    description: string;
    touristic: Prisma.touristicsCreateNestedOneWithoutActivitiesInput;
    user: Prisma.UserCreateNestedOneWithoutActivitiesInput;
}