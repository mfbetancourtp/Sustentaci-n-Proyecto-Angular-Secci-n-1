import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  title:string = "Tour of Heroes";
  logo:string = "https://www.freepnglogos.com/uploads/avengers-png-logo/image-avengers-logo-marvel-cinematic-universe-wiki-18.png";
}
