import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MainComponent } from './main/main.component'; 
import { MainService } from './services/main.service';
import { DetalleComponent } from './detalle/detalle.component';



@NgModule({
  declarations: [MainComponent, DetalleComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[MainComponent],
  providers:[MainService]
})
export class IngresosModule { }
