import { Component, OnInit } from '@angular/core';
import { IOrganizacion } from 'src/app/models/organizacion';
import { IUsuario } from 'src/app/models/usuario';
import { OrganizacionService } from 'src/app/services/organizacion.service';
import { UsuarioService } from 'src/app/services/usuario.service';
import { OrganizacionComponent } from '../organizacion/organizacion.component';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {
  public usuarios: IUsuario[];
  public organizaciones : IOrganizacion[];

  constructor(
    private usuarioService: UsuarioService,
    private organizacionService: OrganizacionService
    ) {
      this.organizacionService.getAll().subscribe(datos => {
        this.organizaciones = datos;
      });

    this.usuarioService.getAll().subscribe(datos =>{
      this.usuarios = datos
    });
  }

  ngOnInit() {

  }

  borrar(usuario:IUsuario){
      if(!usuario.usuarioOrganizaciones || usuario.usuarioOrganizaciones.length == 0)
      {
        this.usuarioService.delete(usuario.id).subscribe(() =>this.usuarios = this.usuarios.filter(a => a.id != usuario.id))
      }else{
         alert("no se puede borrar un usuario con organizaciones afiliadas")
      }
  }

  nombreOrganizacion(id:number):string{
    return this.organizaciones.find(w => w.id == id).nombre;
  }

}
