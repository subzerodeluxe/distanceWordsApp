import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { DistanceWords } from './app.component';
import { HomePage } from '../pages/home/home';

// Native
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { Facebook } from "@ionic-native/facebook";
import { Camera } from '@ionic-native/camera';
import { Network } from '@ionic-native/network';
import { Geolocation } from '@ionic-native/geolocation';

@NgModule({
  declarations: [
    DistanceWords,
    HomePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(DistanceWords)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    DistanceWords,
    HomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Camera,
    Network,
    Geolocation,
    Facebook,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
