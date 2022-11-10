import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ProcessosService } from '../services/processos.service';

@Component({
  selector: 'app-processos-form',
  templateUrl: './processos-form.component.html',
  styleUrls: ['./processos-form.component.css']
})
export class ProcessosFormComponent implements OnInit {

  form: FormGroup;

  constructor(private formBuilder: FormBuilder, private service: ProcessosService, private router: Router) { 
    this.form = this.formBuilder.group({
      descricao:[null],
      parecer:[null]
    })
  }

  ngOnInit(): void {
  }

  onSubmit(){

   this.service.cadastrar(this.form.value);
   this.onCancel();

  }

  onCancel(){
    this.router.navigate(['processos'])
  }

}
