import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule, Injectable, Injector } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { DistanceWords } from './app.component';

// Native
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { Facebook } from "@ionic-native/facebook";
import { Camera } from '@ionic-native/camera';
import { Network } from '@ionic-native/network';
import { Geolocation } from '@ionic-native/geolocation';
import { Pro } from '@ionic/pro';

// Providers
import { AuthServiceProvider } from '../providers/auth-service/auth-service';
import { UserServiceProvider } from '../providers/user-service/user-service';
import { AlertServiceProvider } from '../providers/alert-service/alert-service';

// AF2 Modules
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';

// setup Firebase credentials
export const firebaseConfig = {
  apiKey: "AIzaSyC5t0aZExyge2QPEbsQRI18cQJopL5QHns",
  authDomain: "distancewords-29ab5.firebaseapp.com",
  databaseURL: "https://distancewords-29ab5.firebaseio.com",
  projectId: "distancewords-29ab5",
  storageBucket: "distancewords-29ab5.appspot.com",
  messagingSenderId: "356270271131"
};

// Error tracking 
const IonicPro = Pro.init('64a56ace', {
  appVersion: "0.0.1"
});

@NgModule({
  declarations: [
    DistanceWords
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(DistanceWords),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule,
    AngularFireDatabaseModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    DistanceWords
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Camera,
    Network,
    Geolocation,
    Facebook,
    IonicErrorHandler,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthServiceProvider,
    UserServiceProvider,
    AlertServiceProvider
  ]
})
export class AppModule {}

@Injectable()
export class MyErrorHandler implements ErrorHandler {
  ionicErrorHandler: IonicErrorHandler;

  constructor(injector: Injector) {
    try {
      this.ionicErrorHandler = injector.get(IonicErrorHandler);
    } catch(e) {
      // Unable to get the IonicErrorHandler provider, ensure 
      // IonicErrorHandler has been added to the providers list below
    }
  }

  handleError(err: any): void {
    IonicPro.monitoring.handleNewError(err);
    // Remove this if you want to disable Ionic's auto exception handling
    // in development mode.
    this.ionicErrorHandler && this.ionicErrorHandler.handleError(err);
  }
}
