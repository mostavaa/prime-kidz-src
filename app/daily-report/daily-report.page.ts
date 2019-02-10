import { Component, OnInit } from '@angular/core';
import { LanguageService } from '../services/language.service';
import { ActivatedRoute } from '@angular/router';
import { KidService } from '../services/kids.service';
import { Kid } from '../models/kid.model';
import { FormGroup, FormControl } from '@angular/forms';
import { Activities } from '../models/activities.model';

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
    constructor(private languageService: LanguageService, private route: ActivatedRoute, private kidService: KidService) {
        this.initForm();
    }
    initForm() {
        let today = (new Date());

        this.form = new FormGroup({
            'kid': new FormControl(null ),
            'date': new FormControl(today),
        })
    }
    ngOnInit() {
        this.kidService.kidSubject.subscribe(kids => {
            this.kids = kids;
            if (this.selectedId && this.selectedId != '') {
                let kidIndex = this.kids.findIndex(o => { return o.id == this.selectedId });
                if (kidIndex > -1) {
                    this.selectedKid = this.kids[kidIndex];
                }
            }
        })
        this.route.params.subscribe(params => {
            if (params['id']) {
                this.selectedId = params['id'];
                
            }
        })
        this.okText =  this.languageService.translate('ok')
        this.cancelText = this.languageService.translate('cancel');
    
    }
    searchActivities(f?:any) {
        console.log(this.form);
        console.log(f);
        debugger;
        this.kidService.getKidActivity(this.form.value.kid, this.form.value.date).subscribe(res => {
            this.activites = res;
        })
    }
}
