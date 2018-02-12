import { Component, ViewChild } from '@angular/core';
import { Platform, MenuController, ModalController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import * as firebase from 'firebase/app'; 
import { UserServiceProvider } from '../providers/user-service/user-service';
import { AlertServiceProvider } from '../providers/alert-service/alert-service';
import { AngularFireAuth } from 'angularfire2/auth';
import { AuthServiceProvider } from '../providers/auth-service/auth-service';
import { NavController } from 'ionic-angular/navigation/nav-controller';
import { ScreenOrientation } from '@ionic-native/screen-orientation';

@Component({
  templateUrl: 'app.html'
})
export class DistanceWords {

  @ViewChild('nav') navCtrl: NavController;
  public firebase : any;
  
  constructor(platform: Platform, statusBar: StatusBar, public user: UserServiceProvider, splashScreen: SplashScreen, public alerts: AlertServiceProvider, 
    public menuCtrl: MenuController, public screenOrientation: ScreenOrientation, public modalCtrl: ModalController, public afAuth: AngularFireAuth, public auth: AuthServiceProvider) {
      
      this.firebase = firebase; 
      firebase.auth().onAuthStateChanged(user => {
        if(user) { // when user is authenticated 
          this.navCtrl.setRoot('credentials');
        } else {
          this.navCtrl.setRoot('onboarding'); 
        }
      });
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();

      if(platform.is('cordova')) {
        // set to landscape
       this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.PORTRAIT);
     } 
    });
  }
}

