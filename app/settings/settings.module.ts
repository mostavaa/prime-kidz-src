import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {  ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { SettingsPage } from './settings.page';
import { SharedModule } from '../shared.module';

const routes: Routes = [
  {
    path: '',
    component: SettingsPage
  }
];

@NgModule({
  imports: [
      CommonModule,
      ReactiveFormsModule,
    IonicModule,
      RouterModule.forChild(routes),
      SharedModule
  ],
  declarations: [SettingsPage]
})
export class SettingsPageModule {}
