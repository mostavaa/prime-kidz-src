import { Component, OnInit } from '@angular/core';

import { KidService } from '../services/kids.service';
import { Kid } from '../models/kid.model';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { DialogService } from '../services/dialog.service';
import { LoadingService } from '../services/loading.service';

@Component({
    selector: 'app-kids',
    templateUrl: './kids.page.html',
    styleUrls: ['./kids.page.scss'],
})
export class KidsPage implements OnInit {
    kids: Kid[];
    constructor(
        private kidService: KidService,
        private router: Router,
        private navCtrl: NavController,
        private loadingService: LoadingService,
        private dialogService: DialogService,
    ) { }

    ngOnInit() {
        this.loadingService.showLoading();
        this.kidService.kidSubject.subscribe(kids => {
            this.kids = kids;
            this.loadingService.hideLoading();
        });
        this.kidService.getAll();
    }
    navigateToDailyReport(kid: Kid) {
        this.navCtrl.navigateRoot(['/daily-report', 'kid', kid.id]);
    }
}
