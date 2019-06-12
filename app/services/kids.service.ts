import { Kid } from "../models/kid.model";
import { Constants } from "./constants.service";
import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { UserService } from "./user.service";
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { HttpService } from "./http.service";
import { DialogService } from "./dialog.service";
import { LanguageService } from "./language.service";
import { Activities } from "../models/activities.model";


@Injectable()
export class KidService {
    private kids: Kid[] = [];
    kidSubject: Subject<Kid[]>;
    activitiesSubject: Subject<Activities>;
    private activites: Activities = null;
    constructor(
        private userService: UserService,
        private httpService: HttpService,
        private dialogService: DialogService,
        private languageService: LanguageService
    ) {
        this.kidSubject = new Subject<Kid[]>();
        this.activitiesSubject = new Subject<Activities>();
    }

    getAll() {
        this.kids = [];
        return this.httpService.invoke({
            method: 'POST',
            url: Constants.webURL,
            path: `/Parent/Home/GetKids?token=` + this.userService.getAuthToken(),
        }).subscribe(res => {
            this.kids = [];
            var result = eval(res);
            for (var i = 0; i < result.length; i++) {
                let kid: Kid = new Kid(result[i].Id, result[i].Name, result[i].Hadana);
                this.kids.push(kid);
            }
            debugger;
            this.kidSubject.next(this.kids);
        }, error => {
            this.dialogService.showErrorAlert(this.languageService.translate('error'));
            this.kidSubject.next([]);
        })
    }
    getKidActivity(id: string, date: string) {
        return this.httpService.invoke({
            method: 'POST',
            url: Constants.webURL,
            path: '/Parent/DailyReport/GetKid?id=' + id + '&date=' + date + '&token=' + this.userService.getAuthToken(),
        }).subscribe(res => {
            let result = JSON.parse(res);
            this.activites = result;
            this.activitiesSubject.next(this.activites);
            debugger;
        }, error => {
            
            this.dialogService.showErrorAlert(this.languageService.translate('error'));
        });
    }
}