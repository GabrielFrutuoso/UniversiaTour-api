import { Prisma } from "@prisma/client";
import { IsNumber, IsString } from "class-validator";

export class CreateActivityDto implements Prisma.activitiesCreateInput {
    description: string;

    @IsString()
    touristic: Prisma.touristicsCreateNestedOneWithoutActivitiesInput;

    @IsNumber()
    user: Prisma.UserCreateNestedOneWithoutActivitiesInput;
}