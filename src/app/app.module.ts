import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { DistanceWords } from './app.component';

// Native
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { Facebook } from "@ionic-native/facebook";
import { Camera } from '@ionic-native/camera';
import { Network } from '@ionic-native/network';
import { Geolocation } from '@ionic-native/geolocation';

// Providers
import { AuthServiceProvider } from '../providers/auth-service/auth-service';
import { UserServiceProvider } from '../providers/user-service/user-service';
import { AlertServiceProvider } from '../providers/alert-service/alert-service';

// Pages
import { DashboardPage } from '../pages/dashboard/dashboard';
import { LoginPage } from '../pages/login/login';
import { OnboardingPage } from '../pages/onboarding/onboarding';
import { CheckCredentialsPage } from '../pages/check-credentials/check-credentials';

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

@NgModule({
  declarations: [
    DistanceWords,
    DashboardPage,
    LoginPage,
    OnboardingPage,
    CheckCredentialsPage
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
    DistanceWords,
    DashboardPage,
    LoginPage,
    OnboardingPage,
    CheckCredentialsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Camera,
    Network,
    Geolocation,
    Facebook,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthServiceProvider,
    UserServiceProvider,
    AlertServiceProvider
  ]
})
export class AppModule {}
