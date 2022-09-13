import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {FormControl,FormGroup, Validators} from '@angular/forms';
import {Router, ActivatedRoute} from '@angular/router';
import { IUsuario } from 'src/app/models/usuario';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-usuario-form',
  templateUrl: './usuario-form.component.html',
  styleUrls: ['./usuario-form.component.css'],
  providers: [DatePipe]
})
export class UsuarioFormComponent {
    usuarioForm = new FormGroup({
    nombreFormControl:new FormControl('',Validators.required),
    apellidoFormControl:new FormControl('',Validators.required)
  });

  usuarioId:number;
  nombre:string;
  apellido:string;
  esEditar:true;

  constructor(
              private usuarioService: UsuarioService,
              protected route: Router,
              private activatedRoute:ActivatedRoute){

    this.activatedRoute.params.subscribe(
      params => {
        this.usuarioId=params['id'];

        if( !isNaN(this.usuarioId)  )
        {
          this.esEditar =true;
          this.usuarioService.get(this.usuarioId)
          .subscribe(
            u => {
              console.log(u);
              this.completarDatosFormulario(u)
            },
              error=> console.error(error)
            );
        }
      });
  }

  completarDatosFormulario(usuario:IUsuario){
    this.nombre = usuario.nombre;
    this.apellido = usuario.apellido;
  }

  public validar(formGroup: FormGroup) {
    for (let i in formGroup.controls) {
      if (formGroup.controls.hasOwnProperty(i)) {
        formGroup.controls[i].updateValueAndValidity();
        formGroup.controls[i].markAsDirty();
      }
    }

  }

  guardar(){
    this.validar(this.usuarioForm);
      if(this.usuarioForm.valid){
        var usuario:IUsuario = {
          id:0,
          apellido:this.apellido,
          nombre:this.nombre,
          usuarioOrganizaciones:undefined
          };

        if(this.esEditar){

          usuario.id = parseInt(this.usuarioId.toString())

          this.usuarioService.update(this.usuarioId,usuario).subscribe( r =>{
                        this.route.navigate(['/usuario'])
                        },
                        ()=> alert("No se pudo actualizar, por un error"));
        }else{

          this.usuarioService.create(usuario).subscribe(()=>{
                        alert("Creación Exitosa")
                        this.route.navigate(['/usuario'])
                        },
                        ()=> alert("No se pudo actualizar, por un error"));
        }
      }
    }
}
