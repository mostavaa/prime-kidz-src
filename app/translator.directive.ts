import { Directive, ElementRef, Input, Renderer, OnInit } from '@angular/core';
import { LanguageService } from './services/language.service';

@Directive({
  selector: '[appTranslator]'
})
export class TranslatorDirective implements OnInit {
    @Input('word') word: string;
    constructor(private el: ElementRef, private langService: LanguageService, private _renderer: Renderer) {
    
    }

    ngOnInit() {
        let word = this.langService.translate(this.word);
        this._renderer.setElementProperty(this.el.nativeElement, 'innerHTML', word);
    }
  
}
