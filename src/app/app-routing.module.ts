import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RegistrationComponent } from './registration/registration.component';


const routes: Routes = [
  {path :"",redirectTo:"login",pathMatch :"full" },
  {path :"login",component: LoginComponent },
{path :"home", component: HomeComponent},
{path :"about", component:  AboutComponent},
{path :"registration", component: RegistrationComponent},
{path :"contact", component: ContactComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
