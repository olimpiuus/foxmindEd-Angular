import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'limitCharacters'
})
export class LimitCharactersPipe implements PipeTransform {
  transform(value: string, ...args: unknown[]): unknown {
    return value.slice(0, 35);
  }
}
