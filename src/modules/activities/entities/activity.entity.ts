import { Prisma } from "@prisma/client";

export class Activity {
    id: number;
    name: string;
    description: string;
    touristicId: number;
    userId: number;
    user: Prisma.UserCreateWithoutActivitiesInput;
    touristic: Prisma.touristicsCreateNestedOneWithoutActivitiesInput;
}
