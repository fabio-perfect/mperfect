import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map'
/**
 * Generated class for the TecnologiaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tecnologia',
  templateUrl: 'tecnologia.html',
})
export class TecnologiaPage {
  information: any[];
  
   constructor(public navCtrl: NavController, private http: Http) {
     let localData = http.get('assets/tecnologia.json').map(res => res.json().items);
     localData.subscribe(data => {
       this.information = data;
     })
   }
  
   toggleSection(i) {
     this.information[i].open = !this.information[i].open;
   }
  
   toggleItem(i, j) {
     this.information[i].children[j].open = !this.information[i].children[j].open;
   }
   
  
 }