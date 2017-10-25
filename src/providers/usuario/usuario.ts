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

  listaUsuarios: Observable<Usuario[]>;
  
  usuario = this.afDb.list('usuario');

  constructor(public afDb: AngularFireDatabase) {
    this.listaUsuarios = this.usuario.valueChanges();
  }

  criaUsuario(user: Usuario) {
    return this.usuario.set(user.uid, user);
  }
}
