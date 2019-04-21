import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { ChamadoComponent } from './chamado/chamado.component';
import { ChamadoDetailComponent } from './chamado-detail/chamado-detail.component';
import { ChamadoCreateComponent } from './chamado-create/chamado-create.component';
import { ChamadoEditComponent } from './chamado-edit/chamado-edit.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {
  MatInputModule,
  MatPaginatorModule,
  MatProgressSpinnerModule,
  MatSortModule,
  MatTableModule,
  MatIconModule,
  MatButtonModule,
  MatCardModule,
  MatFormFieldModule } from "@angular/material";

const appRoutes: Routes = [
  {
    path: 'chamados',
    component: ChamadoComponent,
    data: { title: 'Chamado List' }
  },
  {
    path: 'chamado-details/:id',
    component: ChamadoDetailComponent,
    data: { title: 'Chamado Details' }
  },
  {
    path: 'chamado-create',
    component: ChamadoCreateComponent,
    data: { title: 'Create Chamado' }
  },
  {
    path: 'chamado-edit/:id',
    component: ChamadoEditComponent,
    data: { title: 'Edit Chamado' }
  },
  { path: '',
    redirectTo: '/chamados',
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [
    AppComponent,
    ChamadoComponent,
    ChamadoDetailComponent,
    ChamadoCreateComponent,
    ChamadoEditComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatProgressSpinnerModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
