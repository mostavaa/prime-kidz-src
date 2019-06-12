import { Answer } from "./anwer.model";

export class Activity {
    ActivityId: string = '';
    Id: string = "";
    Order:string= "";
    TitleEn: string= "";
    TitleAr: string= "";
    TypeId: string= "";
    TypeTitleEn: string= "";
    TypeTitleAr: string= "";
    ColumnType: string= "";
    Label: string= "";
    Icon: string = ""
    Answers: Answer[]=[]
}