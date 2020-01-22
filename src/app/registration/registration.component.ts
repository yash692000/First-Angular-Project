import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators,AbstractControl } from '@angular/forms';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  registrationform: FormGroup;
  email: AbstractControl;
  pswd: AbstractControl;
  name: AbstractControl;
  gen: AbstractControl;

  userList: Array<any> = [];
  preparedData: Array<any> = [];
  constructor(
    private formbuilder: FormBuilder,
    private userService: UserService,
    private router: Router
  ) { 
    this.registrationform = formbuilder.group({
      name: ['',[Validators.required, Validators.minLength(4), Validators.maxLength(40), Validators.pattern(/^[a-zA-Z ]*$/)]],
      email: ['',[Validators.required, Validators.pattern(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i)]],
      pswd: ['',[Validators.required,Validators.minLength(5),Validators.maxLength(10)]],
      gen: ['',Validators.required]
    });
    this.name = this.registrationform.controls['name'];
    this.email = this.registrationform.controls['email'];
    this.pswd = this.registrationform.controls['pswd'];
    this.gen = this.registrationform.controls['gen'];
  }

  ngOnInit() {
    this.userService.currentMessage.subscribe(data =>{
      console.log('Remaining Data.....',data);
      if(data){
        let newData = JSON.parse(data);
        console.log('',newData);
        this.preparedData = newData;  
      }
    });
  }
  registration(){
    if(this.registrationform.value.name && this.registrationform.value.email
      && this.registrationform.value.pswd && this.registrationform.value.gen){
      let sendData = {
        name: this.registrationform.value.name,
        email: this.registrationform.value.email,
        pswd: this.registrationform.value.pswd,
        gender: this.registrationform.value.gender
      }
      // this.userService.changeMessage(JSON.stringify(sendData));

      //Extra
      this.userList.push(sendData);
      console.log('Data pushed......',this.userList);

      if(this.preparedData && this.preparedData.length > 0){
        console.log("prepared in if......",this.preparedData);
        this.preparedData.push(sendData);
        this.userService.changeMessage(JSON.stringify(this.preparedData));
        this.router.navigate(['contact']);
      }else{
        console.log('Prepared in else.... ', this.preparedData);
        this.userService.changeMessage(JSON.stringify(this.userList));
        this.router.navigate(['contact']);
      }
      // this.router.navigate(['contact']);
    }else{
      this.userService.alertForWarning("Please Fillup All Fields","Warning!");
}
  }
}
