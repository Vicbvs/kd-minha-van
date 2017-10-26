import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

import { AngularFireAuth } from 'angularfire2/auth';

@Injectable()
export class AuthProvider {

  constructor(public fbAuth: AngularFireAuth) {
    console.log(this.verificaLogin());
  }

  adicionaUsuarioEmail(user: { email: string, senha: string }) {
    return this.fbAuth.auth.createUserWithEmailAndPassword(user.email, user.senha);
  }

  entrarComEmail(user: { email: string, senha: string }) {
    return this.fbAuth.auth.signInWithEmailAndPassword(user.email, user.senha)
      .then(authState => {
        return authState != null;
      }).catch(res => console.log(res))
  }

  logOut() {
    return this.fbAuth.auth.signOut();
  }
  verificaLogin() {
    this.fbAuth.authState.subscribe((logado) => {
      logado.getToken?true:false
      console.log(logado)
    });
  }
}
