import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { LoadingService } from './services/loading.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LanguageService } from './services/language.service';
import { SharedModule } from './shared.module';
import { UserService } from './services/user.service';
import { AuthService } from './services/auth.service';
import { HttpService } from './services/http.service';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { TokenInterceptor } from './services/token.interceptor';
import { DialogService } from './services/dialog.service';
import { KidService } from './services/kids.service';
import { CookieService } from 'ngx-cookie-service';

@NgModule({
    declarations: [AppComponent],
    entryComponents: [],
    imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, BrowserAnimationsModule, SharedModule, HttpClientModule],
    providers: [
        StatusBar,
        SplashScreen,
        LoadingService,
        LanguageService,
        UserService,
        AuthService,
        HttpService,
        CookieService,
        DialogService,
        KidService,
        { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
        {
            provide: HTTP_INTERCEPTORS,
            useClass: TokenInterceptor,
            multi: true
        }
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
