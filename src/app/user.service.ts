import { Injectable } from '@angular/core';
import { v4 as uuid } from 'uuid';
import { ToastrService } from 'ngx-toastr';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  
  private messageSource = new BehaviorSubject("");
  currentMessage = this.messageSource.asObservable();
  
  email:any;
  pass: any;

  constructor(
    private toastr: ToastrService

  ) { }

  changeMessage(message: string){
    this.messageSource.next(message);
  }
  login(sendData)
  {
    console.log('getting data in service......',sendData);
    this.email = sendData.email;
    this.pass = sendData.pswd;
    if(this.email == "yash@gmail.com" && this.pass == "12345"){
      let id=uuid();
      console.log("My ID....",id);
      localStorage.setItem("ID",id);
      return true;
    }
    else{
      console.log("INVALID CREDENTIALS");
      return false;
    }
                    
  }
  registration(sendData){
    console.log("User data: ",sendData);
  }

  alertForSuccess(message,title){
    this.toastr.success(message, title);
  }
  alertForWarning(message,title){
    this.toastr.warning(message, title);
  }
  alertFordanger(message,title){
    this.toastr.error(message, title);
}
}
