import { Prisma } from "@prisma/client";
import { Activity } from "../entities/activity.entity";

export class CreateActivityDto implements Prisma.activitiesUncheckedCreateInput {
    id?: number;
    name: string;
    description: string;
    touristicId: number;
    userId: string;

}
