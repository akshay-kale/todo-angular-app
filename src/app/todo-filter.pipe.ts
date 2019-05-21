import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'todoFilter'
})
export class TodoFilterPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}
