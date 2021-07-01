import { Injectable } from '@angular/core';
import { PACIENTES } from '../mock-pacientes';
import { Paciente } from '../entidades/paciente'; 
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Ingreso } from '../entidades/ingreso';
import { IngresoRequest } from '../entidades/ingreso-request';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}


@Injectable({
  providedIn: 'root'
})
export class MainService {
  //pacientes:Paciente[] = PACIENTES;
  //pacientes:Paciente[] = [];
  constructor(private http:HttpClient) { }

  getIngresos():Observable<Ingreso[]>{
    return this.http.get<Ingreso[]>('http://optimionline.no-ip.info:6001/api/ingresos/getingresosencurso');
  }

  guardarIngreso(ingreso:IngresoRequest):Observable<any>{
    const url = `http://optimionline.no-ip.info:6001/api/ingresos/insertarIngreso`;
    return this.http.post<any>(url,ingreso,httpOptions)
      .pipe(
        catchError(this.handleError)
      )
  }

  private handleError(error:HttpErrorResponse){
    console.error(`El backend devolvió el código ${error.status} con el mensaje ${error.message}`)
    return throwError('Algo malo sucedió, intente mas tarde');
  }
}
