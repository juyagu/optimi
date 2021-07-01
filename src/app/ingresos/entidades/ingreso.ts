export class Ingreso {
    public idIngreso:number;
    public estado:number;
    public fecha:string;
    public paciente:number;
    public estadoNavigation:any;
    public pacienteNavigation:any;

    constructor(idIngreso:number,estado:number,fecha:string,paciente:number,estadoNavigation?:any,pacienteNavigation?:any){
        this.idIngreso = idIngreso;
        this.estado = estado;
        this.fecha = fecha;
        this.paciente = paciente;
        this.estadoNavigation = estadoNavigation ? this.estadoNavigation = estadoNavigation : {};
        this.pacienteNavigation = pacienteNavigation ? this.pacienteNavigation = pacienteNavigation : {};     
    }
}
