import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  // Variables 
  title = 'Eder´s Class';
  public usuario: boolean;
  //Constructor de la clase:
  constructor(){
    // Por defecto dejamos al usuario false:
    this.usuario = false;
  }
}
