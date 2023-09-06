import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  title:string = "Carnes y Vinos de Argentina";
  logo:string = "https://i.pinimg.com/564x/b7/31/be/b731be8b3511f426571133f47a12f6a8.jpg";
}
