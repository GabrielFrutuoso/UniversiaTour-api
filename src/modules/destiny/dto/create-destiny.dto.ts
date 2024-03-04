import { Prisma } from "@prisma/client";
import { Destiny } from "../entities/destiny.entity";
import { IsNotEmpty, IsOptional, IsString } from "class-validator";

export class CreateDestinyDto implements Prisma.destiniesUncheckedCreateInput {
    state: string;
    best_season: string;
    weather: string;
    local_maps: string;
    description: string;
    image_url: string;
    touristics?: Prisma.touristicsCreateNestedManyWithoutDestiniesInput;

}