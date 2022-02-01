import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BikeinfoComponent } from './components/bikeinfo/bikeinfo.component';
import { DetailsComponent } from './components/details/details.component';
import { FooterComponent } from './components/footer/footer.component';
import { ForgotComponent } from './components/forgot/forgot.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ResetComponent } from './components/reset/reset.component';

const routes: Routes = [{
    path:"home",
    component:HomeComponent
  },
  {
    path:'',
    redirectTo:'login',
    pathMatch:"full"
  },
  {
    path:"footer",
    component:FooterComponent
  },
  {
    path:"details",
    component:DetailsComponent
  },
  {
    path:"bikeinfo",
    component:BikeinfoComponent
  },
  {
    path:"header",
    component:HeaderComponent
  },
  {
    path:"register",
    component:RegisterComponent
  },
  {
    path:"login",
    component:LoginComponent
  },
  {
    path:"forgot",
    component:ForgotComponent
  },
  {
    path:"reset/:token",
    component:ResetComponent
  },
  {
    path:"confirm/:email/:token",
    component:LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
