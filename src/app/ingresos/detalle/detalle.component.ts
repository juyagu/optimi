import { Component, Input, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Paciente } from './../entidades/paciente';
import { Ingreso } from '../entidades/ingreso';
import { IngresoRequest } from '../entidades/ingreso-request';
import { MainService } from '../services/main.service';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit {

  //paciente:Paciente={idPaciente:0,nombreApellido:'',fechaAlta:''};
  //ingreso:Ingreso = new Ingreso(0,0,'',0);
  ingreso:IngresoRequest = {ingreso:{},paciente:{},analisis:[]}
  titulo:string = ""

  constructor(private route:ActivatedRoute, private router:Router, private svcMain:MainService) { }

  ngOnInit(): void {
    this.titulo = this.route.snapshot.paramMap.get('idPaciente') ? 'Editar Ingreso' : 'Nuevo Ingreso';
    
  }

  getPaciente(){
    //const idPaciente = this.route.snapshot.paramMap.get('idPaciente');
    //console.log(idPaciente)
  }

  guardarIngreso(){
    this.ingreso.ingreso.fecha = '2021-06-05T00:00:00';
    this.ingreso.paciente.idTipoDoc = 1;
    this.ingreso.paciente.sexo = 'M';
    this.ingreso.paciente.fechaNacimiento = "1985-10-22T00:00:00";
    this.ingreso.paciente.fechaAlta = "2021-06-05T00:00:00";
    this.ingreso.analisis = [
      {
          "idAnalisis": 2,
          "codAna": "902",
          "nombre": "Uremia    ",
          "unidades": "g/L       "
      },
      {
          "idAnalisis": 3,
          "codAna": "174",
          "nombre": "Colesterol",
          "unidades": "g/L       "
      }
    ];

    try{
      this.svcMain.guardarIngreso(this.ingreso)
      .subscribe(data => console.log(data))
      
    }catch(error){
      console.log('Hubo un error')
      console.log(error);
    }
  }

  /*
  ng-untouched != ng-touched
  ng-pristine != ng-dirty
  ng-valid != ng-invalid
  */

}
