import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
id: any;
  constructor(
    private router: Router,
    private userService: UserService
    ) { }

  ngOnInit() {
    this.getIdFromLocalStorage();
  }
  getIdFromLocalStorage(){
    this.id = localStorage.getItem("ID");
    console.log('My Id......',this.id);
  }
  logout(){
    localStorage.removeItem("ID");
    this.router.navigate(['login']);
    this.userService.alertForSuccess("LOGOUT SUCCESSFULLY","SUCCESS");
 }
}
