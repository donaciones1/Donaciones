import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {FormControl,FormGroup, Validators} from '@angular/forms';
import {Router, ActivatedRoute} from '@angular/router';
import { IDonacion } from 'src/app/models/donacion';
import { IDonacionSolicitud } from 'src/app/models/donacionSolicitud';
import { IEstado } from 'src/app/models/estado';
import { IUsuario } from 'src/app/models/usuario';
import { DonacionService } from 'src/app/services/donacion.service';
import { DonacionSolicitudService } from 'src/app/services/donacionSolicitud.service';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-donar-solicitud-form',
  templateUrl: './donar-solicitud-form.component.html',
  styleUrls: ['./donar-solicitud-form.component.css'],
  providers: [DatePipe]
})
export class DonarSolicitudFormComponent implements OnInit {

  donacionForm = new FormGroup({
    cantidadFormControl:new FormControl('',Validators.required),
    donanteFormControl:new FormControl('',Validators.required),
    observacionFormControl:new FormControl(),
  });

  donarSolicitudId:number;
  usuarios: IUsuario[];
  estados: IEstado[];
  cantidad: number;
  donanteId: number;
  observacion:string;
  donacionSolicitud: IDonacionSolicitud;

  constructor(
              private donacionSolicitudService: DonacionSolicitudService,
              private donarService:DonacionService,
              private usuarioService: UsuarioService,
              protected route: Router,
              private activatedRoute:ActivatedRoute){

    this.activatedRoute.params.subscribe(
      params => {
        this.donarSolicitudId=params['id'];

        if( !isNaN(this.donarSolicitudId)  )
        {
          this.donacionSolicitudService.get(this.donarSolicitudId)
          .subscribe(
            ds => {
              this.donacionSolicitud = ds;
            }
              ,
              error=> console.error(error)
            );
        }
      });
  }

  ngOnInit() {
    this.usuarioService.getAll().subscribe(data =>{
      this.usuarios = data;
    });
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
    this.validar(this.donacionForm);
      if(this.donacionForm.valid){
        var donacion:IDonacion = {
          id:0,
          cantidad: this.cantidad,
          donacionSolicitud: undefined,
          donacionSolicitudId:  parseInt(this.donarSolicitudId.toString()),
          donante: undefined,
          donanteId: parseInt(this.donanteId.toString()),
          observacion: this.observacion
          };


          this.donarService.create(donacion).subscribe(()=>{
                        alert("Gracias Por su donación!!")
                        this.route.navigate(['/donacion-solicitud'])
                        },
                        ()=> alert("No se pudo actualizar, por un error"));
        }
    }
}
