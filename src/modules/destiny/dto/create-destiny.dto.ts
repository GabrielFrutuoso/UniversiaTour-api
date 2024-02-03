import { Prisma } from "@prisma/client";

export class CreateDestinyDto implements Prisma.destiniesCreateInput {
    state: string;
    bestSeason: string;
    weather: string;
    imageUrl: string;
    touristics?: Prisma.touristicsCreateNestedManyWithoutDestiniesInput;;
}
