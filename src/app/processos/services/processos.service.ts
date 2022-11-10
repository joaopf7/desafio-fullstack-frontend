import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http';
import { Processo } from '../model/processo';
import { first, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProcessosService {

  private readonly API = 'http://localhost:8080/processos';

  constructor(private httpclient: HttpClient) { }

  findAll(){
    return this.httpclient.get<Processo[]>(this.API).pipe(
      first(),
      tap(processos => console.log(processos))
    );
  }

  cadastrar(registro: Processo){
    registro.status = 'pendente';
    return this.httpclient.post<Processo>(this.API, registro).subscribe(result => console.log(result));
  }

  atualizar(registro: Processo){
    registro.status = 'concluido';
    return this.httpclient.put<Processo>(this.API, registro).subscribe(result => console.log(result));
  }
}
