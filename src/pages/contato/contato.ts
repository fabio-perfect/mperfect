import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Validators, FormBuilder, FormGroup } from '@angular/forms';
import {Http, Headers, Request, RequestMethod} from "@angular/http";
/**
 * Generated class for the ContatoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-contato',
  templateUrl: 'contato.html',
})
export class ContatoPage {
  http: Http;
  mailgunUrl: string;
  mailgunApiKey: string;

  constructor(http: Http) {
      this.http = http;
      this.mailgunUrl = 'mailsg.perfectseguranca.com.br';
      this.mailgunApiKey = window.btoa('api:key-242bc36c9db0787ef5bd8467303b8011');
  }

  send(recipient: string, subject: string, message: string) {
      var requestHeaders = new Headers();
      requestHeaders.append('Authorization', 'Basic'  + this.mailgunApiKey);
      requestHeaders.append('Content-Type', 'application/x-www-form-urlencoded');
      this.http.request(new Request({
          method: RequestMethod.Post,
          url: 'https://api.mailgun.net/v3/' + this.mailgunUrl + '/messages',
          body: 'from=contact@perfectseguranca.com.br&to=' + recipient + '&subject=' + subject + '&text=' + message,
          headers: requestHeaders}))
      .subscribe(success => {
          console.log("SUCCESS -> " + JSON.stringify(success));
      }, error => {
          console.log("ERROR -> " + JSON.stringify(error));
      });
  }
}

