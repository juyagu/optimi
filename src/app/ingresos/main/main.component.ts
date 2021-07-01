import { Component, OnInit } from '@angular/core';
import { PACIENTES } from './../mock-pacientes';
import { Paciente } from './../entidades/paciente';
import { MainService } from '../services/main.service';
import { Router } from '@angular/router';
import { Ingreso } from '../entidades/ingreso';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  //pacientes:Paciente[] = PACIENTES;
  pacientes:Paciente[] = [];
  idRegistro:number = 0;
  ingresos:Ingreso[] = [];
  pacienteElegido:Paciente={idPaciente:0,nombreApellido:'',fechaAlta:''};
  constructor(private svcMain:MainService, private router:Router) { }

  ngOnInit(): void {
    //this.cargarPacientes();
    this.cargarIngresos();
  }

  cargarPacientes(){
    //this.pacientes = this.svcMain.getPacientes();
    
  }

  cargarIngresos(){
    const ingresos = this.svcMain.getIngresos(); // ingresos almacena on Observable<Ingreso[]>
    ingresos.subscribe(data => {
        this.ingresos = data;
        console.log(data);
      })
  }

  editarRegistro(pacienteParam:number){
    //this.pacienteElegido = pacienteParam;
    //this.router.navigate(['/detalle/'+ pacienteParam]);
    this.router.navigate([`/detalle/${pacienteParam}`])
  }

}
