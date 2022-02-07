import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BikeinfoComponent } from './components/bikeinfo/bikeinfo.component';
import { DetailsComponent } from './components/details/details.component';
import { FooterComponent } from './components/footer/footer.component';
import { ForgotComponent } from './components/forgot/forgot.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ResetComponent } from './components/reset/reset.component';
import { ReactiveFormsModule } from '@angular/forms';
import {NgxMaterialTimepickerModule} from 'ngx-material-timepicker';
import { NgImageSliderModule } from 'ng-image-slider';
import { HttpClientModule } from '@angular/common/http';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BikeService } from './service/bike.service';
import { BikeregisterComponent } from './components/bikeregister/bikeregister.component';
import { MoreinfoComponent } from './components/moreinfo/moreinfo.component';




@NgModule({
  declarations: [
    AppComponent,
    BikeinfoComponent,
    DetailsComponent,
    FooterComponent,
    ForgotComponent,
    HeaderComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    ResetComponent,
    BikeregisterComponent,
    MoreinfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    NgxMaterialTimepickerModule,
    NgImageSliderModule,
    HttpClientModule,
    ReactiveFormsModule

  ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  providers: [BikeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
