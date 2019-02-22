import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'textOverload'
})
export class TextOverloadPipe implements PipeTransform {

    transform(value: string, args?: any): string {
        if (value)
            return value.length > 15? value.substr(0, 15)+'...' : value;
        return '';
    }

}
