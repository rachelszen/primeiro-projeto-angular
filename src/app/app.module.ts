import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MeuPrimeiroComponent } from './meu-primeiro/meu-primeiro.component';
import { MeuPrimeiro2Component } from './meu-primeiro-2/meu-primeiro-2.component';
import { CursosModule } from './cursos/cursos.module';
import { MeuPrimeiro3Component } from './meu-primeiro-3/meu-primeiro-3.component';

@NgModule({ //decorator
  declarations: [ //listar todos os componentes, diretivas e types que queremos utilizar no modulo
    AppComponent,
    MeuPrimeiroComponent,
    MeuPrimeiro2Component,
    MeuPrimeiro3Component
  ],
  imports: [ //outros modulos que queremos utilizar
    BrowserModule,
    AppRoutingModule,
    CursosModule
  ],
  providers: [], //servicos disponiveis para todos os componentes
  bootstrap: [AppComponent] //component que deve ser instanciado quando executar a aplicacao
})
export class AppModule { }
