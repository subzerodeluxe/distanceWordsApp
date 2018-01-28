import { Component } from '@angular/core';
import { IonicPage, NavController, LoadingController } from 'ionic-angular';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
import { AlertServiceProvider } from '../../providers/alert-service/alert-service';
import { UserServiceProvider } from '../../providers/user-service/user-service';

@IonicPage({
  name: 'login'
}) 

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})

export class LoginPage {
  
  loggedIn: boolean = false;

  constructor(public navCtrl: NavController, 
   public auth: AuthServiceProvider, public alert: AlertServiceProvider, 
   public loadCtrl: LoadingController, public user: UserServiceProvider,
   public nav: NavController) {    
  }
 
   // FACEBOOK LOGIN 
  loginWithFacebook() {
    const loadMessage = this.loadCtrl.create({
      content: "Signing you in ..." 
    });
    loadMessage.present(); 
  
      this.auth.loginWithFacebook().subscribe((success) => { 
        loadMessage.dismiss(); 
        this.navCtrl.setRoot('credentials');  
      }, err => {
        loadMessage.dismiss();
        let message = this.alert.showAlertMessage("Bad connection?", err, "OK");
        message.present(); 
    });
  } // loginWithFacebook
}
