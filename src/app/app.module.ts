import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';

import { FormsModule } from '@angular/forms'

import { RouterModule } from '@angular/router'
import { ROUTES } from './app.routes'

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { CadastroComponent } from './clientes/cadastro/cadastro.component';
import { DadosComponent } from './clientes/dados/dados.component';
import { ListaComponent } from './clientes/lista/lista.component'

import {AngularFireModule} from 'angularfire2';
import {AngularFireDatabaseModule} from 'angularfire2/database';

import {environment} from '../environments/environment';

import {ClienteService} from './clientes/clientes.service';

import { AngularFontAwesomeModule } from 'angular-font-awesome/angular-font-awesome';
import { EditarComponent } from './clientes/editar/editar.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,

    CadastroComponent,
    DadosComponent,
    ListaComponent,
    EditarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(ROUTES),
    NgbModule.forRoot(),

    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule, // for database

    AngularFontAwesomeModule
  ],
  providers: [ClienteService],
  bootstrap: [AppComponent]
})
export class AppModule { }
