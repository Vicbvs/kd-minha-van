import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

import { Observable } from 'rxjs/Observable';

import { Usuario } from './../../models/usuario.model';
import { AngularFireDatabase } from 'angularfire2/database';
/*
  Generated class for the UsuarioProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UsuarioProvider {

  user: Observable<Usuario[]>;
  
  constructor(public afDb: AngularFireDatabase) {
    console.log('Hello UsuarioProvider Provider');
  }

  criaUsuario(user: Usuario) {
    return this.afDb.list(`usuario`).push(user);
  }
}
