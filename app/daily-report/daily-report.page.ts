import { Component, OnInit } from '@angular/core';
import { LanguageService } from '../services/language.service';
import { ActivatedRoute } from '@angular/router';
import { KidService } from '../services/kids.service';
import { Kid } from '../models/kid.model';
import { FormGroup, FormControl } from '@angular/forms';
import { Activities } from '../models/activities.model';
import { Activity } from '../models/activity.model';

@Component({
    selector: 'app-daily-report',
    templateUrl: './daily-report.page.html',
    styleUrls: ['./daily-report.page.scss'],
})
export class DailyReportPage implements OnInit {
    //date : any ;
    cancelText: string;
    okText: string;
    kids: Kid[];
    selectedKid: Kid;
    selectedId: string;
    form: FormGroup
    activites: Activities = null;
    isArabic: boolean = true;
    constructor(private languageService: LanguageService, private route: ActivatedRoute, private kidService: KidService) {
        this.initForm();
    }
    initForm() {
        let today = (new Date());

        this.form = new FormGroup({
            'kid': new FormControl(null),
            'date': new FormControl(today),
        })
    }
    ngOnInit() {
        this.isArabic = !this.languageService.isEnglish();
        this.route.params.subscribe(params => {
            if (params['id']) {
                this.selectedId = params['id'];

            }
        })
        this.kidService.kidSubject.subscribe(kids => {
            let allKids = kids;
            if (this.selectedId && this.selectedId != '') {
                let kidIndex =allKids.findIndex(o => { return o.id == this.selectedId });
                if (kidIndex > -1) {
                    this.selectedKid = allKids[kidIndex];
                }
            }
            this.kids = allKids;
        })
        this.kidService.activitiesSubject.subscribe(
            res => {
                this.activites = res;
                this.processActivities();
            },
            err => {

            }
        );
        this.kidService.getAll();
        this.okText = this.languageService.translate('ok')
        this.cancelText = this.languageService.translate('cancel');

    }
    searchActivities() {
        console.log(this.form.value.date);
        console.log(this.form.value.kid);
        if (this.form.value.kid && this.form.value.date)
            this.kidService.getKidActivity(this.form.value.kid, this.convertDate());
    }
    absent: boolean = false;
    noAct: boolean = false;
    act: boolean = false;
    private processActivities() {
        
        this.absent = this.noAct = this.act = false;
        if (this.activites.IsPublished == false) {
            this.noAct = true;
        } else if (this.activites.IsPublished == true && this.activites.IsCurrentKidAbsent) {
            this.absent = true;
        } else {
            this.act = true;
            this.groupActivities(this.activites.Activities);
        }
    }
    groupedActivities = [];
    private groupActivities(allActivities: Activity[]) {
        let groupedActivities = [];
        for (var i = 0; i < allActivities.length; i++) {
            let found = groupedActivities.findIndex(o => o.TypeTitleEn == allActivities[i].TypeTitleEn);
            if (found > -1) {
                groupedActivities[found].activities.push(allActivities[i]);
            } else {
                groupedActivities.push({
                    TypeTitleAr: allActivities[i].TypeTitleAr,
                    TypeTitleEn: allActivities[i].TypeTitleEn,
                    activities: [allActivities[i]]
                });
            }
        }
        this.groupedActivities = groupedActivities;
        console.log(this.groupedActivities);
    }
    private convertDate() {
        if (this.form.value.date) {
            var mm = this.form.value.date.getMonth() + 1; // getMonth() is zero-based
            var dd = this.form.value.date.getDate();
            return mm + '/' + dd + '/' + this.form.value.date.getFullYear();
        }
        return '';
    }
}
