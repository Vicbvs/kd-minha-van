import { AuthProvider } from './../../providers/auth/auth';
import { Usuario } from './../../models/usuario.model';
import { UsuarioProvider } from './../../providers/usuario/usuario';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

/**
 * Generated class for the CadastroPassageiroPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cadastro-passageiro',
  templateUrl: 'cadastro-passageiro.html',
})
export class CadastroPassageiroPage {

  formCadastro: FormGroup;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public formBuilder: FormBuilder,
    public userService: UsuarioProvider,
    public authService: AuthProvider) {

    let emailReg = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;

    this.formCadastro = this.formBuilder.group({

      nome: [ '', [ Validators.required, Validators.minLength(3) ] ],
      email: [ '', [ Validators.compose([ Validators.required, Validators.pattern(emailReg) ]) ] ],
      senha: [ '', [ Validators.required, Validators.minLength(6) ] ],
      telefone: [ '', [ Validators.required, Validators.minLength(9) ] ]
    });
  }
  fazerCadastro() {
    let usuario: Usuario = this.formCadastro.value;

    // Cria usuario com email e senha
    this.authService.adicionaUsuarioEmail({
      email: usuario.email,
      senha: usuario.senha
    }) //Adiciona no banco depois de criar
      .then(authState => {
        delete usuario.senha;
        usuario.uid = authState.uid
        this.userService.criaUsuario(usuario)
        this.navCtrl.setRoot('PassageiroInicialPage', { nome: usuario.nome })
      })
      .catch(erro=> console.log(erro))
  }

  ionViewDidLoad() {

  }

}
