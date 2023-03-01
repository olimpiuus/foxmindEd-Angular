import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'JSONStr'
})
export class JSONStrPipe implements PipeTransform {
  transform(value: unknown): unknown {
    // const regex = /[.\]/g;
    return JSON.stringify(value)
      .split(',')
      .map((el) => el.replace(/[^:\w\s]/g, ''))
      .join(', ')
      .replace(/:/g, ': ');
  }
}
