import { Component, OnInit } from '@angular/core';

import { Platform, NavController, MenuController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { LoadingService } from './services/loading.service';
import { LanguageService } from './services/language.service';
import { AuthService } from './services/auth.service';
import { Router, NavigationEnd, RoutesRecognized } from '@angular/router';


@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html'
})
export class AppComponent implements OnInit {
    isEnglish: boolean;
    isLoginPage: boolean = false;
    constructor(
        private platform: Platform,
        private splashScreen: SplashScreen,
        private statusBar: StatusBar,
        private navCtrl: NavController,
        private menueCtrl: MenuController,
        private loadingService: LoadingService,
        private languageService: LanguageService,
        private authService: AuthService,
        private router: Router
    ) {
        this.initializeApp();
     
    }
    ngOnInit() {
        this.isLoginPage = false;
        this.router.events.subscribe(val => {
            if (val instanceof RoutesRecognized) {
                this.isLoginPage = val.state.root.firstChild.routeConfig.path == 'login';
            }
        });
        this.isEnglish = this.languageService.isEnglish();
    }
    initializeApp() {
        this.platform.ready().then(() => {
            this.statusBar.styleDefault();
            this.splashScreen.hide();
        });
    }
    Navigate(route: string) {
        this.navCtrl.navigateRoot(route);
        this.menueCtrl.close();
    }
    logout() {
        this.authService.logout();
        location.reload();
    }
    switchLanguage() {
        this.languageService.switchLanguage();
        this.menueCtrl.close();
        location.reload();
    }
    showLoader() {
        this.loadingService.showLoading();
        setTimeout(() => this.loadingService.hideLoading(), 5000);
    }
    isLogged() {
        let logged = this.authService.isLogged()
        return logged;
    }
}
