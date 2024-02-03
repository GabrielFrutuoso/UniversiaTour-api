import { Prisma } from "@prisma/client";

export class CreateTouristicDto implements Prisma.touristicsCreateInput {
    location: string;
    city: string;
    localMaps: string;
    description: string;
    images?: Prisma.imagesCreateNestedManyWithoutTouristicInput;
    activities?: Prisma.activitiesCreateNestedManyWithoutTouristicInput;
    destinies: Prisma.destiniesCreateNestedOneWithoutTouristicsInput;
}
