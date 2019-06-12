import { Component, OnInit } from '@angular/core';
import { NgForm, FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { User } from '../models/user.model';
import { LoadingService } from '../services/loading.service';
import { DialogService } from '../services/dialog.service';
import { LanguageService } from '../services/language.service';
import { UserService } from '../services/user.service';
import { NavController } from '@ionic/angular';
import { CookieService } from 'ngx-cookie-service';

@Component({
    selector: 'app-login',
    templateUrl: './login.page.html',
    styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
    username: string;
    password: string;
    form: FormGroup = new FormGroup({
        'username': new FormControl(null, Validators.required),
        'password': new FormControl(null, Validators.required),
    });
    constructor(
        private authService: AuthService,
        private loaderService: LoadingService,
        private dialogService: DialogService,
        private languageService: LanguageService,
        private userService: UserService,
        private navCtrl: NavController,
        private cookieService: CookieService
    ) {
        this.username = this.languageService.translate('username');
        this.password = this.languageService.translate('password');
        this.initForm();
    }

    ngOnInit() {
        console.log("cookie user is : " + this.cookieService.check("user"));
        if (this.authService.isLogged())
            this.navCtrl.navigateRoot('kids');
        this.initForm();
    }
    initForm() {
        this.form = new FormGroup({
            'username': new FormControl(null, Validators.required),
            'password': new FormControl(null, Validators.required),
        })
    }
    login() {
        this.loaderService.showLoading();
       

        this.authService.login(new User(this.form.value.username, this.form.value.password, '', ''))
            .subscribe(token => {
                debugger;
                if (token)
                    this.successLogin(token);
                this.loaderService.hideLoading();
            }, error => {
                debugger;
                console.log(error);
                this.loaderService.hideLoading();
                this.dialogService.showErrorAlert(this.languageService.translate('wrongUser'));
                this.authService.logout();
            });
    }
    successLogin(token) {
        if (token && token != '') {
            this.userService.setCurrentUser(new User(this.form.value.username, this.form.value.password, token, ''));
            this.navCtrl.navigateRoot('kids');
        }
        this.loaderService.hideLoading();
        location.href = '';
    }
}
