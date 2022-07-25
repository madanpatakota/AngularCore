import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-customer-registration-form',
  templateUrl: './customer-registration-form.component.html',
  styleUrls: ['./customer-registration-form.component.css'],
})
export class CustomerRegistrationFormComponent implements OnInit {
  constructor() {}

  statesList = [
    {
      Id: 1,
      Name: 'Karnataka',
    },
    {
      Id: 2,
      Name: 'Andhrapradesh',
    },
    {
      Id: 3,
      Name: 'TamilNadu',
    },
  ];

  ngOnInit(): void {}


  @ViewChild('email') vEmail:ElementRef<any> | undefined;
  @ViewChild('password') vPassword:ElementRef<any> | undefined;
  @ViewChild('address') vAddress:ElementRef<any> | undefined;
  @ViewChild('secondAddress') vSecondAddress:ElementRef<any> | undefined;
  @ViewChild('state') vState:ElementRef<any> | undefined;
  @ViewChild('city') vCity:ElementRef<any> | undefined;
  @ViewChild('zipcode') vZipcode:ElementRef<any> | undefined;


  sEmail = "";
  sPassword ="";
  sAddress = "";
  sSecondAddress = "";
  sCity = "";
  sZipCode = "";
  sState = "";

  CustomerForm = {};

  receivedFeedbackInfo:any = {};


  Submit(){
    this.sEmail  = this.vEmail?.nativeElement.value;
    this.sPassword  = this.vPassword?.nativeElement.value;
    this.sAddress  = this.vAddress?.nativeElement.value;
    this.sSecondAddress = this.vSecondAddress?.nativeElement.value;
    this.sState= this.vState?.nativeElement.value;
    this.sCity  = this.vCity?.nativeElement.value;
    this.sZipCode  = this.vZipcode?.nativeElement.value;


    this.CustomerForm = {
       'Email' : this.sEmail,
       'Password' : this.sPassword,
       'Address' : this.sAddress,
       'SecondAddress' : this.sSecondAddress,
       'State' : this.sState,
       'City' : this.sCity,
       'ZipCode' : this.sZipCode
    }
  }


  
  receivedFeedbackData(info:any){
    console.log(info);
    this.receivedFeedbackInfo = info;
  }





}
