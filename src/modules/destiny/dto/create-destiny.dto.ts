import { Prisma } from "@prisma/client";


export class CreateDestinyDto {
    state: string;
    best_season: string;
    weather: string;
    local_maps: string;
    description: string;
    image_url: string;
    touristic_id: number
    touristics?: Prisma.touristicsCreateNestedManyWithoutDestiniesInput;
}