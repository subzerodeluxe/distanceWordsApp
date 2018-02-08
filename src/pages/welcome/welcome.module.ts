import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { WelcomePage } from './welcome';
import { CountryComponent } from '../../components/country/country';

@NgModule({
  declarations: [
    WelcomePage,
    CountryComponent
  ],
  imports: [
    IonicPageModule.forChild(WelcomePage)
  ],
})
export class WelcomePageModule {}
