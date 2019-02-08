import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpSentEvent, HttpHeaderResponse, HttpErrorResponse, HttpProgressEvent, HttpResponse, HttpUserEvent } from "@angular/common/http";
import {  Observable } from "rxjs";
import { UserService } from './user.service';
import { CookieService } from 'ngx-cookie-service';
import { LanguageService } from './language.service';
import { Constants } from './constants.service';


@Injectable()
export class TokenInterceptor implements HttpInterceptor {
    constructor(private userService: UserService, private languageService: LanguageService, private cookieService: CookieService) { }
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpSentEvent | HttpHeaderResponse | HttpProgressEvent | HttpResponse<any> | HttpUserEvent<any> | any> {
        let handling = next.handle(request.clone({ setHeaders: { Authorization: `Bearer ${this.userService.getAuthToken()}` } }))
        if (this.languageService.isEnglish())
            this.cookieService.set("lang", Constants.english);
        else 
            this.cookieService.set("lang", Constants.arabic);
        return handling;
    }
}