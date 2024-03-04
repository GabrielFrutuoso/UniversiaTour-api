import { Prisma } from "@prisma/client";

export class Activity {
    id?: number;
    location: string;
    city: string;
    local_maps: string;
    description: string;
    destinies_id: number;
    user: Prisma.UserCreateWithoutActivitiesInput;
    touristic: Prisma.touristicsCreateNestedOneWithoutActivitiesInput;
}
