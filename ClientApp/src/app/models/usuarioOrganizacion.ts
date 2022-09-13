import { IBase } from "./base";
import { IOrganizacion } from "./organizacion";
import { IUsuario } from "./usuario";

export interface IUsuarioOrganizacion extends IBase{
    usuarioId: number
    usuario: IUsuario
    organizacionId:number
    organizacion:IOrganizacion
}
