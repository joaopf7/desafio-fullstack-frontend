import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'status'
})
export class StatusPipe implements PipeTransform {

  transform(value: string): string {
    switch(value) {
      case 'pendente': return 'pending_actions';
      case 'concluido': return 'done_all';
    }
    return 'code';
  }

}
