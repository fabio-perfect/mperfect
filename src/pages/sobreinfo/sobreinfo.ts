import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, Platform, ViewController } from 'ionic-angular';

/**
 * Generated class for the SobreinfoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-sobreinfo',
  templateUrl: 'sobreinfo.html',
})
export class SobreinfoPage {

  character;
  
  constructor(
    public platform: Platform,
    public params: NavParams,
    public viewCtrl: ViewController,
    public modalCtrl: ModalController
  ) {
    var characters = [
      {
        name: 'Missão',
        quote: 'Nossa Missão',
        image: 'assets/img/avatar-gollum.jpg',
        items: [
         
          {  note: 'Desenvolver soluções completas para uma sociedade mais segura e justa, proporcionando serviços de alta qualidade e sendo referência de organização que combate a violência de forma inteligente.' }
        ]
      },
      {
        name: 'Visão',
        quote: 'Nossa Visão',
        image: 'assets/img/avatar-frodo.jpg',
        items: [
         
          { note: 'Ser referência no mercado de segurança patrimonial, oferecendo soluções completas e ganhando o respeito, admiração e a con􀏐iança dos clientes.' }
        ]
      },
      {
        name: 'Valores',
        quote: 'Nosso Valores',
        image: 'assets/img/avatar-samwise.jpg',
        items: [
       
          { note: 'Funcionário, nosso maior diferêncial. A união, companherismo e transparência são catacterísticas essenciais para o crescimento e otimização de uma empresa. É desta forma que a Perfect Segurança trata seus colaboradores, acreditando que eles são peças fundamentais no desenvolvimento da empresa. Por isso, a Perfect Segurança investe na qualificação e treinamento permanente de seus colaboradores, para que eles possam atender de forma satosfatória as espectativas desejadas da empresa e do cliente.' }
        ]
      }
    ];
    this.character = characters[this.params.get('charNum')];
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }
}