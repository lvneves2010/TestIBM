import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChatbotComponent } from './components/chatbot/chatbot.component';
import { ChamadoComponent } from './components/chamado/chamado.component';
import { ChamadoCreateComponent } from './components/chamado-create/chamado-create.component';
import { ChamadoDetailComponent } from './components/chamado-detail/chamado-detail.component';
import { ChamadoEditComponent } from './components/chamado-edit/chamado-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    ChatbotComponent,
    ChamadoComponent,
    ChamadoCreateComponent,
    ChamadoDetailComponent,
    ChamadoEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
