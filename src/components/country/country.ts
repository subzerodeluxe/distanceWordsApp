import { Component } from '@angular/core';
import { NavController } from 'ionic-angular/navigation/nav-controller';

@Component({
  selector: 'country',
  templateUrl: 'country.html'
})
export class CountryComponent {

  text: string;
  language: string; 
  
  constructor(private navCtrl: NavController) {
    console.log('Hello CountryComponent Component');
    this.text = 'What language do you want to learn?';
  }

  showLanguage(language) { 
    console.log('Language: ' + language);
  }

  loadDashboard() {
    this.navCtrl.setRoot('dashboard'); 
  }


}
