import { IBase } from "./base";
import { IUsuario } from "./usuario";
import { IUsuarioOrganizacion } from "./usuarioOrganizacion";

export interface IOrganizacion extends IBase{
    nombre: string
    descripcion: string
    contactoId: number
    contacto: IUsuario
    usuarioOrganizacion: IUsuarioOrganizacion[]
}
