import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SubmitMoodPage } from './submit-mood';
import { SmileRateComponent } from '../../components/smile-rate/smile-rate';

@NgModule({
  declarations: [
    SubmitMoodPage,
    SmileRateComponent
  ],
  imports: [
    IonicPageModule.forChild(SubmitMoodPage),
  ],
})
export class SubmitMoodPageModule {}
