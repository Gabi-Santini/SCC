import { Component, OnInit} from '@angular/core';
import {FirebaseListObservable} from 'angularfire2/database';

import {ClienteService} from '../clientes.service';
import {Cliente} from '../clientes.model';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {


  clientes: FirebaseListObservable<Cliente[]>;

  constructor(private clienteService: ClienteService) {}

  ngOnInit() {
    this.clientes = this.clienteService.getClientesLista();
  }

  deleteClientes() {
    this.clienteService.deleteAll();
  }


}
