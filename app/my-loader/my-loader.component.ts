import { Component, OnInit } from '@angular/core';
import { LoadingService } from '../services/loading.service';
import {
    trigger,
    state,
    style,
    animate,
    transition,
} from '@angular/animations';

@Component({
    selector: 'app-my-loader',
    templateUrl: './my-loader.component.html',
    styleUrls: ['./my-loader.component.scss'],
    animations: [
        trigger('openClose', [
            state('open', style({
                transform: 'translateY(-20px)',
                //opacity: 1,
            })),
            state('closed', style({
                transform: 'translateY(0px)',
                //opacity: 0.5,
            })),
            transition('open => closed', [
                animate('2s')
            ]),
            transition('closed => open', [
                animate('1s')
            ]),
        ]),
    ]
})
export class MyLoaderComponent implements OnInit {
    loading: boolean = false;
    isOpen: boolean = false;
    openDuration = 1000;
    closeDuration = 2000;
    constructor(private loadingService: LoadingService) {
        this.hide();
    }
    toggleAnimation() {
        this.isOpen = !this.isOpen;
        setTimeout(() => this.toggleAnimation(), this.isOpen ? this.openDuration :this.closeDuration);
    }
    ngOnInit() {
        setTimeout(() => this.toggleAnimation(), this.isOpen ? this.openDuration : this.closeDuration);
        this.loadingService.isLoadingSubject.subscribe(res => {
            this.loading = res;
        });
        this.hide();
    }
    hide() {
        this.loading = false;
    }
}
