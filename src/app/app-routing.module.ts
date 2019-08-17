import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// Importamos los nuevos componentes:
import { RegistroComponent } from './componentes/registro/registro.component';
import { InicioComponent } from './componentes/inicio/inicio.component';

// Agregamos las rutas a la constante routes:
const routes: Routes = [
	{path: '', component: RegistroComponent },
	{path: 'registro', component: RegistroComponent },
	{path: 'inicio', component: InicioComponent } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
