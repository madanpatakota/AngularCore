import { Component } from '@angular/core'

// @ which is usefule for gives the information to the compoennt

// ctrl+shift+f

// create , declare still i did't use this selecto any where in my applciation...

@Component(
    {
        'selector' :  'app-custom-location',
        'templateUrl' : './customapp.component.html',
        'styleUrls' : ['./customapp.component.css']
    }
)

// 1. i have to add the selector
// 2. i have to add the referece template
// 3. i have to add the css file
// 4. i have to register this into the appmodule(bcci)

export class CustomAppComponent{

    name ="Madn"

}