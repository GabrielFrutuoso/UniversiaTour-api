import { Prisma } from "@prisma/client";

export class Touristic implements Prisma.touristicsUncheckedCreateInput {
    id?: number;
    location: string;
    city: string;
    localMaps: string;
    description: string;
    destiniesId: number;
    images?: Prisma.imagesUncheckedCreateNestedManyWithoutTouristicInput;
    activities?: Prisma.activitiesUncheckedCreateNestedManyWithoutTouristicInput;
}
