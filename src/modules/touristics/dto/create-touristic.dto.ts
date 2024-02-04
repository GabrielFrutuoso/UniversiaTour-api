import { Prisma } from "@prisma/client";
import { IsNotEmpty, IsOptional, IsString } from "class-validator";

export class CreateTouristicDto implements Prisma.touristicsCreateInput {
    @IsNotEmpty()
    @IsString()
    location: string;

    @IsNotEmpty()
    @IsString()
    city: string;

    @IsNotEmpty()
    @IsString()
    localMaps: string;

    @IsNotEmpty()
    @IsString()
    description: string;

    @IsOptional()
    images?: Prisma.imagesCreateNestedManyWithoutTouristicInput;

    @IsOptional()
    activities?: Prisma.activitiesCreateNestedManyWithoutTouristicInput;

    @IsOptional()
    destinies: Prisma.destiniesCreateNestedOneWithoutTouristicsInput;
}
