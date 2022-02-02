import { NgModule,CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {InfobikeComponent} from './infobike/infobike.component';
import {BikeregisterComponent} from './bikeregister/bikeregister.component';
import {BikeInformationComponent} from './bike-information/bike-information.component'
import {GeneralService} from './shared/general.service';
import {ReactiveFormsModule} from '@angular/forms'

@NgModule({
  declarations: [
    AppComponent,
    InfobikeComponent,
    BikeregisterComponent,BikeInformationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [GeneralService],
  bootstrap: [AppComponent],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
