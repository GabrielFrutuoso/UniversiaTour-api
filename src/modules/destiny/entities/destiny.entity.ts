import { Prisma } from "@prisma/client";

export class Destiny {
    id?: number;
    state: string;
    bestSeason: string;
    weather: string;
    imageUrl: string;
    description: string;
    touristics?: Prisma.touristicsUncheckedCreateNestedManyWithoutDestiniesInput;
}
