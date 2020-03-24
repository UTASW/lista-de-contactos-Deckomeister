import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'fechaNacimiento'
})
export class FechaNacimientoPipe implements PipeTransform {

  transform(value: Date, ...args: any[]): any {
    return null;
  }

}
