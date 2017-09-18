import { Component, OnInit } from '@angular/core';
import {FirebaseListObservable} from 'angularfire2/database';

import {ClienteService} from '../clientes.service';
import {Cliente} from '../clientes.model';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
