import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuardGuard } from './auth-guard.guard';

const routes: Routes = [
    { path: '', redirectTo: 'contact-us', pathMatch: 'full' },
    { path: 'kids', loadChildren: './kids/kids.module#KidsPageModule'/*, canActivate: [AuthGuardGuard] */},
    { path: 'daily-report', loadChildren: './daily-report/daily-report.module#DailyReportPageModule'/*, canActivate: [AuthGuardGuard] */},
    { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
    { path: 'contact-us', loadChildren: './contact-us/contact-us.module#ContactUsPageModule' },
    { path: 'settings', loadChildren: './settings/settings.module#SettingsPageModule'/*, canActivate: [AuthGuardGuard] */},
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
