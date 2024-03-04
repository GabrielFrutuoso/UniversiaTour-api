import { Prisma } from "@prisma/client";
import { Destiny } from "../entities/destiny.entity";
import { IsNotEmpty, IsOptional, IsString } from "class-validator";

export class CreateDestinyDto implements Destiny {
    @IsNotEmpty()
    @IsString()
    state: string;
      
    @IsNotEmpty()
    @IsString()
    best_season: string;

    @IsNotEmpty()
    @IsString()
    weather: string;

    @IsNotEmpty()
    @IsString()
    image_url: string;

    @IsNotEmpty()
    @IsString()
    local_maps: string;

    @IsNotEmpty()
    @IsString()
    description: string;

    @IsOptional()
    touristics?: Prisma.touristicsUncheckedCreateNestedManyWithoutDestiniesInput;
}