import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProcessosRoutingModule } from './processos-routing.module';
import { ProcessosComponent } from './processos/processos.component';
import {MatTableModule} from '@angular/material/table';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatIconModule} from '@angular/material/icon';
import { StatusPipe } from './pipes/status.pipe';
import { ProcessosFormComponent } from './processos-form/processos-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import { ProcessosParecerComponent } from './processos-parecer/processos-parecer.component';


@NgModule({
  declarations: [
    ProcessosComponent,
    StatusPipe,
    ProcessosFormComponent,
    ProcessosParecerComponent
  ],
  imports: [
    CommonModule,
    ProcessosRoutingModule,
    MatTableModule,
    MatProgressSpinnerModule,
    MatIconModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule
  ]
})
export class ProcessosModule { }
