import { Component } from '@angular/core';
import { IonicPage, ViewController, ModalController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-pcontato',
  templateUrl: 'pcontato.html',
})
export class PcontatoPage {

  constructor( public viewCtrl: ViewController, public modalCtrl: ModalController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PcontatoPage');
  }
  dismiss() {
    this.viewCtrl.dismiss();
  }
}
