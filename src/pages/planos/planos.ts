


import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { PlanospricePage } from './../planosprice/planosprice';
import { PcontatoPage } from './../pcontato/pcontato';
/**
 * Generated class for the PlanosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-planos',
  templateUrl: 'planos.html',
})
export class PlanosPage {
  constructor(public modalCtrl: ModalController) { }
  
    openModal(characterNum) {
  
      let modal = this.modalCtrl.create(PlanospricePage, characterNum);
      modal.present();
    }

}