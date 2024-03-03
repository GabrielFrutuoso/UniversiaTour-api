import { Prisma } from "@prisma/client";
import { IsNotEmpty, IsOptional, IsString } from "class-validator";

export class CreateDestinyDto implements Prisma.destiniesUncheckedCreateInput {
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
