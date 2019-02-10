import { Kid } from "./kid.model";
import { Activity } from "./activity.model";
import { ActivityType } from "./activityType.model";

export class Activities {
    kid: Kid = null;
    isPublished: boolean = false;
    activities: Activity[] = [];
    activityTypes: ActivityType[] = [];
    isKidWithDefault: boolean= false;
    isCurrentKidAbsent: boolean= false;
    constructor() {

    }
}