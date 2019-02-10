import { Answer } from "./anwer.model";

export class Activity {
    activityId: string = '';
    id: string = "";
    order:string= "";
    titleEn: string= "";
    titleAr: string= "";
    typeId: string= "";
    typeTitleEn: string= "";
    typeTitleAr: string= "";
    columnType: string= "";
    label: string= "";
    icon: string = ""
    answers: Answer[]=[]
}