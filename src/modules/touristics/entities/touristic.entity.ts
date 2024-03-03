import { Prisma } from "@prisma/client";

export class Touristic implements Prisma.touristicsUncheckedCreateInput {
    id?: number;
    location: string;
    city: string;
    local_maps: string;
    description: string;
    destinies_id: number;
    images?: Prisma.imagesUncheckedCreateNestedManyWithoutTouristicInput;
    activities?: Prisma.activitiesUncheckedCreateNestedManyWithoutTouristicInput;
}
