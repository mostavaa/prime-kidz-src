import { NgModule } from '@angular/core';

import { MyLoaderComponent } from './my-loader/my-loader.component';
import { TranslatorDirective } from './translator.directive';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [ MyLoaderComponent, TranslatorDirective],
    entryComponents: [],
    imports: [CommonModule],
    exports: [MyLoaderComponent,TranslatorDirective],
    providers: [
       
    ],
})
export class SharedModule { }
