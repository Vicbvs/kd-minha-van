import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

import { AngularFireAuth } from 'angularfire2/auth';

@Injectable()
export class AuthProvider {

  constructor(public fbAuth: AngularFireAuth) {
    console.log('Hello AuthProvider Provider');
  }

  adicionaUsuarioEmail(user: { email: string, senha: string }) {
    return this.fbAuth.auth.createUserWithEmailAndPassword(user.email, user.senha);
  }
}
