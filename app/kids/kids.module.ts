import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { TokenInterceptor } from './../services/token.interceptor';
import { IonicModule } from '@ionic/angular';

import { KidsPage } from './kids.page';
import { SharedModule } from '../shared.module';

const routes: Routes = [
  {
    path: '',
    component: KidsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
      RouterModule.forChild(routes),
      SharedModule
  ],
    declarations: [KidsPage],
    providers: []
})
export class KidsPageModule {}
