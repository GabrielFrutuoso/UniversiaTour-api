import { Prisma } from "@prisma/client";
import { IsNotEmpty, IsOptional, IsString } from "class-validator";

export class CreateDestinyDto implements Prisma.destiniesUncheckedCreateInput {
    id?: number;
    state: string;
    best_season: string;
    weather: string;
    local_maps: string;
    description: string;
    image_url: string;
    touristics?: Prisma.touristicsUncheckedCreateNestedManyWithoutDestiniesInput;
}
