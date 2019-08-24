import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  // Variables publicas:
  public estado: boolean;
  public imagen: string;
  public login: any;
  public msj: string;

  constructor() {
  	this.imagen = 'assets/img/PlayStation.png';
  	this.login = { correo: '', clave: '' };
  }

  ngOnInit() {
  }

  //ViewChild para el formulario:
  @ViewChild('formlogin', {static:true}) formlogin: NgForm;

  // Funciones del componente:
  // Función de inicio de sesión:
  Login(){
  		this.login.correo = this.formlogin.value.correo;
		this.login.clave = this.formlogin.value.clave;
		this.msj=(this.login.correo +' '+this.login.clave);
  	/*
  	if () {
  		this.estado = true;
  		this.msj = 'Estas ingresando con el usuario';
  	}else{
  		this.estado = false;
  		this.msj = 'Me estas tratando de violentar?';
  	}*/
  }

}
