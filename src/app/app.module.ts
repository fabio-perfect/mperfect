

import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { HttpModule } from '@angular/http';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { TecnologiaPage } from './../pages/tecnologia/tecnologia';
import { SobrenosPage } from './../pages/sobrenos/sobrenos';
import { SegurancaprivadaPage } from './../pages/segurancaprivada/segurancaprivada';
import { PlanosPage } from './../pages/planos/planos';
import { ContatoPage } from './../pages/contato/contato';
import { MenuPage } from './../pages/menu/menu';

import { PlanospricePage } from './../pages/planosprice/planosprice';
import { SobreinfoPage } from './../pages/sobreinfo/sobreinfo';
import { PcontatoPage } from './../pages/pcontato/pcontato';



@NgModule({
  declarations: [
    MyApp,
    HomePage,
    TecnologiaPage,
    SobrenosPage,
    SegurancaprivadaPage,
    PlanosPage,
    ContatoPage,
    MenuPage,
    SobreinfoPage,
    PlanospricePage,
    PcontatoPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    TecnologiaPage,
    SobrenosPage,
    SegurancaprivadaPage,
    PlanosPage,
    ContatoPage,
    MenuPage,
    SobreinfoPage,
    PlanospricePage,
    PcontatoPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
