import { Component, OnInit } from '@angular/core';

import { KidService } from '../services/kids.service';
import { Kid } from '../models/kid.model';
import { Router } from '@angular/router';

@Component({
    selector: 'app-kids',
    templateUrl: './kids.page.html',
    styleUrls: ['./kids.page.scss'],
})
export class KidsPage implements OnInit {
    kids: Kid[];
    constructor(private kidService: KidService, private router: Router) { }

    ngOnInit() {
        this.kidService.kidSubject.subscribe(kids => {
            this.kids = kids;
        });
        this.kidService.getAll();
    }
    navigateToDailyReport(kid: Kid) {
        this.router.navigate(['/daily-report', 'kid',kid.id]);
    }
}
