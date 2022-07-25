import { Component, OnInit } from '@angular/core';


// component is html + ts + css
// Q) what is the component ts file?
// A : A simple class where i can develop the business logic
//     business logic nothing but code


// Q) hwo you are bind   | sync
// the your busines logic
// to the html


// string interpolation
// property data binding
// string data binding
// event data binidng


//event or function or method--> 


@Component({
  selector: 'app-custom-two-app',
  templateUrl: './custom-two-app.component.html',
  styleUrls: ['./custom-two-app.component.css']
})
export class CustomTwoAppComponent {
  title = 'angularBasicsJuly';  // code...

  Name  = "AngularBatch";   

  CustomerId = 1234;

  controlValue = "radio";

  //method
  getLocationName(){
    return "Bangolore"
  }

  alert(){
      window.alert("Clicked");
  }

  showLog(){
    let a=1;
    let b =2;
    let c = a+b;
    console.log(c);
  }

  //when ever if you do't want to execute the code after 

  //some point


  //timeout
  // 1 sec 
  // 2 sec
  // 10 sec


  monitorKeys($event:any){
      // keys
      console.log($event);
      if($event.key === 'z'){
        window.alert("Please do't enter the z value");
        setTimeout(()=>{
          this.Name = this.Name.replace('z','');
          //console.log(this.Name)
          //this.Name = "Madan"
        },1000)
        return;
      }
      
  }

  //    ========> one way (property) databinding

  Location  = "Hyderabad"
  modelChanges($event:any){
     console.log($event);

     this.Location = $event;
    //  setTimeout(() => {
     
    //  }, 2000);

  }


  // function maths(a , b){

  // }
  
  Employee = "John"


  CustomerType:string = "temp";
  Area :string="hyderabad";


  pincode = "560033";



  Locatoions = ["Hyderabad","Bangolore","Chennai"];


  // for(var i = 0 , i<10; i++){
  //    i 
  // }
  


  //CustomerType == 'perminent' ? 'OK' : 'notOK';


  // if(CustomerType == 'perminnet'{

  // })

  // else{

  // }

}
