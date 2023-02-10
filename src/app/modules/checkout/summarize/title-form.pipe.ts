import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'titleForm'
})
export class TitleFormPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): unknown {

    const titleAdj = {
      'items' : 'Order-list',
      'address': 'Personal information address',
      'payment': 'Type of payment',
      'dateOfDelivery': 'Delivery date',
      'personalInfo' : 'Personal information'
    };
    console.log(Object.getOwnPropertyDescriptor(titleAdj,value)?.value);
    
    if (Object.keys(titleAdj).includes(value)) { return Object.getOwnPropertyDescriptor(titleAdj,value)?.value }
    return value;
  }

}
