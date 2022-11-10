import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, Observable, of } from 'rxjs';
import { Processo } from '../model/processo';
import { ProcessosService } from '../services/processos.service';

@Component({
  selector: 'app-processos',
  templateUrl: './processos.component.html',
  styleUrls: ['./processos.component.css']
})
export class ProcessosComponent implements OnInit {

  processos$: Observable<Processo[]> ;
  displayedColumns = ['descricao', 'acoes'];

  constructor(private processosService: ProcessosService, private router: Router) { 
    this.processos$ = this.processosService.findAll().pipe(
      catchError(error => {
        console.log(error);
        return of([])
      })
    );
  }

  ngOnInit(): void {
  }

  add(){
    this.router.navigate(['processos/new'])
  }

  realizarParecer(processo: Processo){
    console.log(processo);
    this.router.navigate(['processos/parecer'])
  }

}
