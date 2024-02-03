import { Prisma } from "@prisma/client";
import { Destiny } from "../entities/destiny.entity";
import { IsOptional, IsString } from "class-validator";

export class CreateDestinyDto implements Destiny {
    @IsString()
    state: string;
        q
    @IsString()
    bestSeason: string;

    @IsString()
    weather: string;

    @IsString()
    imageUrl: string;

    @IsOptional()
    touristics?: Prisma.touristicsUncheckedCreateNestedManyWithoutDestiniesInput;
}
