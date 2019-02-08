import { Subject } from "rxjs";

export class LoadingService {
    isLoadingSubject: Subject<boolean>;
    constructor() {
        this.isLoadingSubject = new Subject<boolean>();
    }
    showLoading() {
        this.isLoadingSubject.next(true);
    }
    hideLoading() {
        this.isLoadingSubject.next(false);
    }
}