import { NgModule } from '@angular/core';
import { CountryComponent } from './country/country';
import { MoodModalComponent } from './mood-modal/mood-modal';
import { SmileRateComponent } from './smile-rate/smile-rate';

@NgModule({
	declarations: [CountryComponent,
    MoodModalComponent,
    SmileRateComponent],
	imports: [],
	exports: [
	CountryComponent,
    MoodModalComponent,
    SmileRateComponent]
})
export class ComponentsModule {}
