import { AuthProvider } from './../../providers/auth/auth';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the PassageiroInicialPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-passageiro-inicial',
  templateUrl: 'passageiro-inicial.html',
})
export class PassageiroInicialPage {

  nome: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, public authService: AuthProvider) {
  }

  ionViewDidLoad() {
    this.nome = this.navParams.get('nome');
  }
  logOut() {
    this.authService.logOut()
      .then(() => this.navCtrl.setRoot('LoginPage'))
      .catch(erro => console.log(erro))
  }
}
