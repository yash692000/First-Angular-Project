import { Injectable } from '@angular/core';
import { v4 as uuid } from 'uuid';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  email:any;
  pass: any;

  constructor() { }
  login(sendData)
  {
    console.log('getting data in service......',sendData);
    this.email = sendData.email;
    this.pass = sendData.pswd;
    if(this.email == "kamlesh@gmail.com" && this.pass == "12345"){
      return true;
    }
    else{
      return false;
    }
   
  }
}
