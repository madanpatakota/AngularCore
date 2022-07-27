import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
styleUrls: ['./customer-details.component.css']
})
export class CustomerDetailsComponent implements OnInit , OnChanges {

  
  //input of the component 
  //receiving the data...
  //inputting the data...
  @Input('test') _test:any;
  @Input('registrionFormData') _customerForm:any;


  @Input('registrionFormData') set InputCustomerForm(value:any){
    if(value.Email == ""){
        value.Email = "No value";
    }
    this._customerForm = value;
  }
 


  @Output('evtFeedbackInformation') Information = new EventEmitter<any>();
  //this.feedbackInformation.emit(this.feedbackInformation);

  //event emitter its akind of injection
  // 1. output decarator name and your object shoudl be sync
  // 2. how you have to give the feedbackinformation object
  // to the output decarator value

  ICForm:any = {};


  

  constructor() { }

  

  //

  //It will be handle the input changes
  //when ever input property changes it will be load
  ICForms:any = [];
  ngOnChanges(changes: SimpleChanges): void {
    //this.ICForm = this._customerForm
    
    console.log(this._customerForm);
    this.ICForms?.push(this._customerForm);
    //console.log(this.ICForms);
  }



  // Human -- > human life cycle ---> 10-20 , 20-30
  
  // Component -- >  life cycle ---> ngOninit , ngONchanges


  //Life cycle hook
  ngOnInit(): void {
    console.log("From customer details compoennt " ,  this._test);
  }


  FeedbackInformation = { "EmailFeedback" : ""};
  evtFeedBack(){
    if(this.ICForm.Email == "" ){
      this.FeedbackInformation.EmailFeedback = "Email is not available";
    }
    else{
      this.FeedbackInformation.EmailFeedback = "Email is available";
    }
   this.Information.emit(this.FeedbackInformation);
  }



}
