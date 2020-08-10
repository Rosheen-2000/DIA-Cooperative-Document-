import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'safety'
})
export class SafetyPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
