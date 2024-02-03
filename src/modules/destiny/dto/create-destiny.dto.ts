import { Prisma } from "@prisma/client";
import { Destiny } from "../entities/destiny.entity";

export class CreateDestinyDto implements Destiny {
    id?: number;
    state: string;
    bestSeason: string;
    weather: string;
    imageUrl: string;
    touristics?: Prisma.touristicsUncheckedCreateNestedManyWithoutDestiniesInput;
}
