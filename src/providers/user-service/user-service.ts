import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { AngularFireAuth } from "angularfire2/auth";
import { AngularFireDatabase, AngularFireList } from "angularfire2/database";
import { AlertServiceProvider } from '../alert-service/alert-service';
import { Profile } from '../../models/profile.interface';
import { AngularFireObject } from 'angularfire2/database/interfaces';


@Injectable()
export class UserServiceProvider {
  user: any; 
  userProfile: AngularFireObject<Profile>; 
  oneSignalUid: string; 
 
  constructor(public afAuth: AngularFireAuth, public alerts: AlertServiceProvider, public db: AngularFireDatabase) { 

  } 

  editUserProfile(userObject) { 
    let userId = this.afAuth.auth.currentUser?this.afAuth.auth.currentUser.uid:""; 
    this.user = this.db.object(`/boxes/DA72tCfOH2ZFaCZcVnEPj53cl7JA/users/${userId}`);

    this.alerts.presentTopToast("UID: " + this.oneSignalUid); 
    return new Promise((resolve, reject) => {
      this.user.update({
        birthday: userObject.birthday,
        oneSignalId: this.oneSignalUid 
      }).then(res => {
        resolve(res)
      }).catch(error => {
        reject(error)
      });
    })
  }  

  updateUserProfile(userObject) { 
    let userId = this.afAuth.auth.currentUser?this.afAuth.auth.currentUser.uid:""; 
    this.user = this.db.object(`/boxes/DA72tCfOH2ZFaCZcVnEPj53cl7JA/users/${userId}`);

    this.user.update({
      birthday: userObject.birthday,
      name: userObject.name,
      email: userObject.email
    }).then(_ => {
      return this.user; 
    }).catch(error => {
      console.log('set birthday in Firebase --> error!'); 
    })
  }  

  getUserProfile(): AngularFireObject<Profile> {
    let userId = this.afAuth.auth.currentUser?this.afAuth.auth.currentUser.uid:""; 
    return this.userProfile = this.db.object(`/boxes/DA72tCfOH2ZFaCZcVnEPj53cl7JA/users/${userId}`); 
  }

  findUserbyName(name): any {
    let users = this.getUsers();
    //return users.valueChanges(users => users.filter(user => user.name === name)[0]); 
    //return users.valueChanges().map(users => users.filter(user => user.name === name)[0]); 
  }

  getUsers(): AngularFireList<Profile[]> {
    return this.db.list(`/boxes/DA72tCfOH2ZFaCZcVnEPj53cl7JA/users`);
  }
}