import { Prisma } from "@prisma/client";

export class Activity {
    id?: number;
    location: string;
    city: string;
    localMaps: string;
    description: string;
    destiniesId: number;
    user: Prisma.UserCreateWithoutActivitiesInput;
    touristic: Prisma.touristicsCreateNestedOneWithoutActivitiesInput;
}
