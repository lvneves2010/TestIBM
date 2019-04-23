import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
/*NG MATERIAL*/
import { MatInputModule, MatPaginatorModule,MatProgressSpinnerModule,MatSortModule,MatTableModule,MatIconModule,MatButtonModule,MatCardModule,MatFormFieldModule } from "@angular/material";

import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ChamadosComponent } from './components/chamados/chamados.component';
import { ChamadosCreateComponent } from './components/chamados-create/chamados-create.component';
import { ChamadosDetailComponent } from './components/chamados-detail/chamados-detail.component';
import { ChamadosEditComponent } from './components/chamados-edit/chamados-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ChamadosComponent,
    ChamadosCreateComponent,
    ChamadosDetailComponent,
    ChamadosEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
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
