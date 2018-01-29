

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, Platform, ViewController } from 'ionic-angular';
import { SobreinfoPage } from './../sobreinfo/sobreinfo';

/**
 * Generated class for the SobrenosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-sobrenos',
  templateUrl: 'sobrenos.html',
})
export class SobrenosPage {
  
  constructor(public modalCtrl: ModalController) { }
  
    openModal(characterNum) {
  
      let modal = this.modalCtrl.create(SobreinfoPage, characterNum);
      modal.present();
    }

}
