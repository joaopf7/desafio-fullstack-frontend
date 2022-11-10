import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProcessosFormComponent } from './processos-form/processos-form.component';
import { ProcessosParecerComponent } from './processos-parecer/processos-parecer.component';
import { ProcessosComponent } from './processos/processos.component';

const routes: Routes = [
  {'path': '', component: ProcessosComponent},
  {'path': 'new', component: ProcessosFormComponent},
  {'path': 'parecer', component: ProcessosParecerComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProcessosRoutingModule { }
