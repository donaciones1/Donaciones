import { IBase } from "./base";
import { IDonacion } from "./donacion";
import { IDonacionSolicitudItem } from "./donacionSolicitudItem";
import { IEstado } from "./estado";
import { IOrganizacion } from "./organizacion";
import { IUsuario } from "./usuario";

export interface IDonacionSolicitud extends IBase{
    titulo: string
    observacion: string
    cantidadActual:number
    cantidadFin:number
    organizacionId: number
    organizacion: IOrganizacion
    ownerId:number
    owner:IUsuario
    estadoId:number
    estado:IEstado
    donaciones: IDonacion[]
}
