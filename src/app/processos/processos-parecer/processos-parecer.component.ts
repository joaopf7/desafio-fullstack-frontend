import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ProcessosService } from '../services/processos.service';

@Component({
  selector: 'app-processos-parecer',
  templateUrl: './processos-parecer.component.html',
  styleUrls: ['./processos-parecer.component.css']
})
export class ProcessosParecerComponent implements OnInit {

  form: FormGroup;

  constructor(private formBuilder: FormBuilder, private service: ProcessosService, private router: Router) { 
    this.form = this.formBuilder.group({
      id:[null],
      descricao:[null],
      parecer:[null]
    })
  }

  ngOnInit(): void {
  }

  onSubmit(){

   this.service.atualizar(this.form.value);
   this.onCancel();

  }

  onCancel(){
    this.router.navigate(['processos'])
  }
}
