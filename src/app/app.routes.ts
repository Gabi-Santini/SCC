import { Routes } from '@angular/router'
import { HomeComponent } from './home/home.component'

import { CadastroComponent } from './clientes/cadastro/cadastro.component'
import { DadosComponent } from './clientes/dados/dados.component'
import { ListaComponent } from './clientes/lista/lista.component'


export const ROUTES: Routes = [
    {path: '', component: HomeComponent},
    {path: 'cadastrar', component: CadastroComponent},    
    {path: 'consultar', component: ListaComponent}
]
