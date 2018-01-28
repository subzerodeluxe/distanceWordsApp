import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertServiceProvider } from '../../providers/alert-service/alert-service';
import { UserServiceProvider } from '../../providers/user-service/user-service';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';

@IonicPage({
  name: 'credentials'
})

@Component({
  selector: 'page-check-credentials',
  templateUrl: 'check-credentials.html',
})
export class CheckCredentialsPage implements OnInit {

  userForm: FormGroup;
  birthday: any; 
 
  constructor(public navCtrl: NavController, public user: UserServiceProvider, 
  public navParams: NavParams, public alert: AlertServiceProvider, public fb: FormBuilder, public auth: AuthServiceProvider) {
    
  }

  ngOnInit():any {
    this.userForm = this.fb.group({
        birthday: ['', Validators.required]
    });
   }

   updateProfile() {
     console.log("User object " + JSON.stringify(this.userForm.value)); 
     this.user.editUserProfile(this.userForm.value)
      .then(_ => {
        this.alert.presentBottomToast("Awesome! Your profile is now complete!");
        this.navCtrl.setRoot('dashboard'); 
      }).catch(err => this.alert.presentBottomToast("Could not update your profile. Try again!"));
   }

  skipPage() {
    this.navCtrl.setRoot('dashboard'); 
  }

  signOut() {
    this.auth.logout(); 
  }
}
