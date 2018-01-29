

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, ViewController, Platform } from 'ionic-angular';
import { PcontatoPage } from './../pcontato/pcontato';
/**
 * Generated class for the PlanospricePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-planosprice',
  templateUrl: 'planosprice.html',
})
export class PlanospricePage {

  character;
  
  constructor(
    public platform: Platform,
    public params: NavParams,
    public viewCtrl: ViewController,
    public modalCtrl: ModalController
  ) {
    var characters = [
      {
        name: 'Bronze',
        quote: 'Plano Bronze',
       
        items: [
         
          { title: 'R$ 100,00 Mensal' },
          { title: 'Monitoramento de intrusão' },
          { title: 'Pânico e Coação' },
          { title: 'Incêndio (via teclado LCD)' },
          { title: 'Teste 24 horas do sistema de Alarme' }
        ]
      },
      {
        name: 'Prata',
        quote: 'Plano Prata',
       
        items: [
         
          { title: 'R$ 100,00 Mensal' },
          { title: 'Monitoramento de intrusão' },
          { title: 'Pânico e Coação' },
          { title: 'Incêndio (via teclado LCD)' },
          { title: 'Teste 24 horas do sistema de Alarme' },
          { title: 'Seguro' }
        ]
      },
      {
        name: 'Ouro',
        quote: 'Plano Ouro',
      
        items: [
       
          { title: 'R$ 150,00 Mensal' },
          { title: 'Monitoramento de intrusão' },
          { title: 'Pânico e Coação' },
          { title: 'Incêndio (via teclado LCD)' },
          { title: 'Teste 24 horas do sistema de Alarme' },
          { title: 'Seguro' },
          { title: 'Sistema GPRS' }
          
        ]
      },
      {
        name: 'Diamante',
        quote: 'Plano Diamante',
      
        items: [
       
          { title: 'R$ 200,00 Mensal' },
          { title: 'Monitoramento de intrusão' },
          { title: 'Pânico e Coação' },
          { title: 'Incêndio (via teclado LCD)' },
          { title: 'Teste 24 horas do sistema de Alarme' },
          { title: 'Seguro' },
          { title: 'Sistema GPRS' },
          { title: 'Vídeo Alerta' }
          
        ]
      }
    ];
    this.character = characters[this.params.get('charNum')];
  }
  openModal(characterNum) {
    
        let modal = this.modalCtrl.create(PcontatoPage, characterNum);
        modal.present();
      }
  dismiss() {
    this.viewCtrl.dismiss();
  }
}
