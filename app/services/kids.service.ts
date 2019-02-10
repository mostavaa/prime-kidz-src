import { Kid } from "../models/kid.model";
import { Constants } from "./constants.service";
import { HttpService } from "./http.service";
import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

@Injectable()
export class KidService {
    private kids: Kid[] = [];
    kidSubject: Subject<Kid[]>;
    constructor(private httpService: HttpService) {
        this.kidSubject = new Subject<Kid[]>();
    }

    getAll() {
        this.kids = [];
        return this.httpService.invoke({
            method: 'GET',
            url: Constants.webURL,
            path: '/Parent/DailyReport/GetKids',
        }).subscribe(res => {
            [{ "Id": "8dd5a08b-7212-46e2-b7e5-6c11ef1fc59a", "Name": "kid 1" }, { "Id": "cc65d124-584b-44c4-99f6-ebf9d51996c3", "Name": "kid 2" }]
            for (var i = 0; i < res.length; i++) {
                this.kids.push(new Kid(res[i].Id, res[i].Name));
            }
            this.kidSubject.next(this.kids);
        })
    }
    getKidActivity(id:string , date:string) {
        return this.httpService.invoke({
            method: 'GET',
            url: Constants.webURL,
            path: '/Parent/DailyReport/GetKid',
            query: {
                id: id,
                date: date
            }
        });
    }
}