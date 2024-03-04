import { Prisma } from "@prisma/client";

export class Destiny {
    id?: number;
    state: string;
    best_season: string;
    weather: string;
    image_url: string;
    description: string;
    local_maps: string;
    touristics?: Prisma.touristicsUncheckedCreateNestedManyWithoutDestiniesInput;
}