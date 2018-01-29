
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ValoresPage } from './../valores/valores';
import { VisaoPage } from './../visao/visao';
import { SobrenosPage } from './../sobrenos/sobrenos';

/**
 * Generated class for the MissaoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-missao',
  templateUrl: 'missao.html',
})
export class MissaoPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  goTo(page) {
    if (page === 'sobre-nos') {
    this.navCtrl.push(SobrenosPage);
    } else if (page === 'visao') {
    this.navCtrl.push(VisaoPage);
    }else if (page === 'valores') {
      this.navCtrl.push(ValoresPage);

  }

}
back() {
  if (this.navCtrl.length() >= 2) {
  this.navCtrl.pop();
  }
  }
  }
