import { AuthProvider } from './../../providers/auth/auth';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  formLogin: FormGroup;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public formBuilder: FormBuilder,
    public authService: AuthProvider) {

    // Verifica se já está logado

    this.authService.fbAuth.authState.subscribe(
      logado => {
        if (logado) {
          console.log(logado.email);
          this.navCtrl.setRoot('PassageiroInicialPage', { nome: logado.email })
        }
      }
    );


    // Validacao formulario login
    let emailReg = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;

    this.formLogin = this.formBuilder.group({
      email: [ '', [ Validators.compose([ Validators.required, Validators.pattern(emailReg) ]) ] ],
      senha: [ '', [ Validators.required, Validators.minLength(6) ] ],
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }
  fazerLogin() {
    let credenciais = {
      email: this.formLogin.value.email,
      senha: this.formLogin.value.senha
    }

    this.authService.entrarComEmail(credenciais)
      .then(res => {
        if (res) {
          this.navCtrl.setRoot('PassageiroInicialPage', { nome: credenciais.email })
        }
      })
      .catch(res => console.log(res))
  }
}
