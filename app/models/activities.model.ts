import { Kid } from "./kid.model";
import { Activity } from "./activity.model";
import { ActivityType } from "./activityType.model";

export class Activities {
    kid: Kid = null;
    IsPublished: boolean = false;
    Activities: Activity[] = [];
    ActivityTypes: ActivityType[] = [];
    IsKidWithDefault: boolean= false;
    IsCurrentKidAbsent: boolean= false;
    constructor() {

    }
}