import { Component, OnInit } from '@angular/core';
import {FormsModule} from '@angular/forms';

import {ClienteService} from '../clientes.service';
import {Cliente} from '../clientes.model';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  cliente: Cliente = new Cliente();
  submitted = false;

  constructor(private clienteService: ClienteService) {}

  ngOnInit() {
  }

  novoCliente(): void {
    this.submitted = false;
    this.cliente = new Cliente();
  }

  save() {
    this.clienteService.createCliente(this.cliente);
    this.cliente = new Cliente();
  }

  onSubmit() {
    this.submitted = true;
    this.save();
  }
}
