import {Injectable} from '@angular/core';
import {AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable} from 'angularfire2/database';
import {Cliente} from './clientes.model';

@Injectable()
export class ClienteService {

  private dbPath: string = '/clientes';

  cliente: FirebaseObjectObservable<Cliente> = null;
  clientes: FirebaseListObservable<Cliente[]> = null;

  constructor(private db: AngularFireDatabase) {
    this.clientes = db.list('/clientes');
  }

  getCliente(key: string): FirebaseObjectObservable<Cliente> {
    this.cliente = this.db.object(`${this.dbPath}/${key}`);
    return this.cliente;
  }

  createCliente(cliente: Cliente): void {
    this.clientes.push(cliente).catch(error => this.handleError(error));
  }

  updateCliente(key: string, valor: any): void {
    this.clientes.update(key, valor).catch(error => this.handleError(error));
  }

  deleteCliente(key: string): void {
    this.clientes.remove(key).catch(error => this.handleError(error));
  }

  getClientesLista(query = {}): FirebaseListObservable<Cliente[]> {
    this.clientes = this.db.list(this.dbPath, {
      query: query
    });
    return this.clientes;
  }

  deleteAll(): void {
    this.clientes.remove().catch(error => this.handleError(error));
  }

  private handleError(error) {
    console.log(error);
  }
}
