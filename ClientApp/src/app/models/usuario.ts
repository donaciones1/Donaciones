import { IBase } from "./base";
import { IUsuarioOrganizacion } from "./usuarioOrganizacion";

export interface IUsuario extends IBase{
    nombre: string
    apellido: string
    usuarioOrganizaciones: IUsuarioOrganizacion[]
}
