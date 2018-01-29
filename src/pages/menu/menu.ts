


import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { HomePage } from './../home/home';
import { SobrenosPage } from "./../sobrenos/sobrenos";
import { ContatoPage } from './../contato/contato';





@IonicPage()
@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html',
})
export class MenuPage {

  tab1Root: any = HomePage;
  tab2Root: any = SobrenosPage;
  tab3Root: any = ContatoPage;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MenuPage');
  }

}
