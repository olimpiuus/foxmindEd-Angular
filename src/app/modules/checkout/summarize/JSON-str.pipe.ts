import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'JSONStr'
})
export class JSONStrPipe implements PipeTransform {
  transform(value: unknown, ...args: unknown[]): unknown {
    // const regex = /[.\]/g;
    return JSON.stringify(value).split(/[^a-zA-Z0-9\-:!?<> ]/g).join(' ')
  }
}
