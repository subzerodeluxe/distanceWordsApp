import { Component, OnInit } from '@angular/core';
import { NavParams, ViewController, LoadingController, NavController, ModalController, Platform } from "ionic-angular";
import { AlertServiceProvider } from '../../providers/alert-service/alert-service';

@Component({
  selector: 'mood-modal',
  templateUrl: 'mood-modal.html'
})
export class MoodModalComponent implements OnInit {

  moodRating: any;
  moodColor: any; 
  welcomeMessage: string;
  closingMessage: string;  
  showCamera: boolean; 
  shareMood: boolean; 
  shareMoodWith: any; 
  persons: any; 

  imageData: any; 
  moodPicture: string = null; 

  constructor(params: NavParams, public platform: Platform, public navCtrl: NavController,
     public viewCtrl: ViewController,public loadingCtrl: LoadingController, public alerts: AlertServiceProvider,
  public modalCtrl: ModalController) {
    
    this.moodRating = params.get('mood'); 
    this.moodColor = params.get('moodColor'); 

   console.log("Dit is meegekomen " + this.moodRating + " " + this.moodColor);
 }

  ngOnInit() {
    if(this.moodRating >= 55) {
      this.welcomeMessage = "Good to hear!"; 
      this.closingMessage = "Want to share your smile?"; 
      this.showCamera = true; 
    } else {
      this.welcomeMessage = "Oh noo ...";
      this.closingMessage = "You could use a boost!";
      this.shareMood = true; 
    }
  }
  

  closeModal() {
      //this.viewCtrl.dismiss();
    this.navCtrl.setRoot('dashboard'); 
  }
}