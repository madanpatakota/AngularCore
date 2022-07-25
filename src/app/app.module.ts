import { NgModule } from '@angular/core';
// i am importing iphone from US
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';

// CustomAppComponent
import {  CustomAppComponent } from './custom-app/customapp.component';
import { CustomTwoAppComponent } from './custom-two-app/custom-two-app.component';
import { FormsModule } from '@angular/forms';
import { CustomThreeComponent } from './custom-three/custom-three.component';
import { CustomerRegistrationFormComponent } from './customer-registration-form/customer-registration-form.component';
import { CustomerDetailsComponent } from './customer-details/customer-details.component';


// import { iphone } from 'US';

@NgModule({
  declarations: [
    AppComponent,
    CustomAppComponent,
    CustomTwoAppComponent,
    CustomThreeComponent,
    CustomerRegistrationFormComponent,
    CustomerDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

// angular is a javascript framework which can useful for develop the single apps
//single page appliation.....
