import { Component, OnInit, Input } from '@angular/core';

import {ClienteService} from '../clientes.service';
import {Cliente} from '../clientes.model';


@Component({
  selector: '[app-dados]',
  templateUrl: './dados.component.html',
  styleUrls: ['./dados.component.css']

})
export class DadosComponent implements OnInit {

  @Input() cliente: Cliente;

 constructor(private clienteService: ClienteService) {}

 ngOnInit() { }

 updateActive(estaAtivo: boolean) {
   this.clienteService.updateCliente(this.cliente.$key, {ativo: estaAtivo})
 }

 deleteCliente() {
   this.clienteService.deleteCliente(this.cliente.$key)
 }

}
