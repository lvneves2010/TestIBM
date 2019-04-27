import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChamadoComponent } from './components/chamado/chamado.component';
import { ChamadoCreateComponent } from './components/chamado-create/chamado-create.component';
import { ChamadoDetailComponent } from './components/chamado-detail/chamado-detail.component';
import { ChamadoEditComponent } from './components/chamado-edit/chamado-edit.component';

const routes: Routes = [
  { path: 'home', component: ChamadoComponent },  
  { path: '', component: ChamadoComponent },  
  { path: 'chamado', component: ChamadoComponent },  
  { path: 'chamado-create', component: ChamadoCreateComponent },  
  { path: 'chamado-details', component: ChamadoDetailComponent },  
  { path: 'chamado-edit', component: ChamadoEditComponent }  
];

@NgModule({
  declarations: [
  ],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
