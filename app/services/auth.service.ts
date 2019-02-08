import { Injectable } from "@angular/core";
import { User } from '../models/user.model';
import { UserService } from './user.service';
import { Constants } from './constants.service';
import { HttpService } from './http.service';
import { LoadingService } from "./loading.service";
import { DialogService } from "./dialog.service";
import { LanguageService } from "./language.service";
import { NavController } from "@ionic/angular";
@Injectable()
export class AuthService {

    constructor(
        private httpService: HttpService,
        private userService: UserService,
        private loaderService: LoadingService,
        private dialogService: DialogService,
        private languageService: LanguageService,
        private navCtrl: NavController
    ) {}

    login(user: User) {
        
            return this.httpService.invoke({
                method: 'GET',
                url: Constants.webURL,
                path: 'Parent/Account/Get',
                query: {
                    username: user.username,
                    password: user.password
                }
            })


        return null;
    }

    logout() {
        this.userService.clearCurrentUser();
    }
    isLogged() {
        return !this.userService.isTokenExpired();
    }




}