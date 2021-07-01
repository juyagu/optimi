import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './ingresos';
import { DetalleComponent } from './ingresos';

const routes: Routes = [
  {path:'main',component:MainComponent},
  {path:'detalle/:idPaciente',component:DetalleComponent},
  {path:'nuevoIngreso',component:DetalleComponent },
  {path:'',redirectTo:'main',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
