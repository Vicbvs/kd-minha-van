import { Observable } from 'rxjs/Observable';
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

    users: Observable<Usuario[]>

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public formBuilder: FormBuilder,
    public userService: UsuarioProvider) {

    let emailReg = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;

    this.formCadastro = this.formBuilder.group({

      nome: [ '', [ Validators.required, Validators.minLength(3) ] ],
      email: [ '', [ Validators.compose([ Validators.required, Validators.pattern(emailReg) ]) ] ],
      senha: [ '', [ Validators.required, Validators.minLength(6) ] ],
      telefone: [ '', [ Validators.required, Validators.minLength(9) ] ]
    });
  }
  fazerCadastro() {
    this.userService.criaUsuario(this.formCadastro.value)
      .then(() => console.log("Usuario criado"))
  }

  ionViewDidLoad(){
   this.users = this.userService.listaUsuarios;
  }

}
