import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {FormControl,FormGroup, Validators} from '@angular/forms';
import {Router, ActivatedRoute} from '@angular/router';
import { IDonacion } from 'src/app/models/donacion';
import { IDonacionSolicitud } from 'src/app/models/donacionSolicitud';
import { IDonacionSolicitudItem } from 'src/app/models/donacionSolicitudItem';
import { IEstado } from 'src/app/models/estado';
import { IOrganizacion } from 'src/app/models/organizacion';
import { IUsuario } from 'src/app/models/usuario';
import { DonacionSolicitudService } from 'src/app/services/donacionSolicitud.service';
import { EstadoService } from 'src/app/services/estado.service copy';
import { OrganizacionService } from 'src/app/services/organizacion.service';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-donacion-solicitud-form',
  templateUrl: './donacion-solicitud-form.component.html',
  styleUrls: ['./donacion-solicitud-form.component.css'],
  providers: [DatePipe]
})
export class DonacionSolicitudFormComponent implements OnInit {
  cantidadActual: number = 0;

  donacionSolicitudForm = new FormGroup({
    tituloFormControl:new FormControl('',Validators.required),
    cantidadFinFormControl:new FormControl(''),
    observacionFormControl:new FormControl(),
    ownerFormControl:new FormControl('',Validators.required),
    estadoFormControl:new FormControl('',Validators.required),
    organizacionFormControl:new FormControl('',Validators.required),
  });

  donacionSolicitudId:number;
  usuarios: IUsuario[];
  cantidadFin:number
  organizaciones: IOrganizacion[];
  estados: IEstado[];
  esEditar: boolean=false;
  titulo: string;
  observacion: string;
  ownerId: number = 1;
  estadoId: number = 1;
  organizacionId:number = 1;
  donacionSolicitudItems: IDonacionSolicitudItem[] = [];
  donaciones: IDonacion[] = [];

  constructor(
              private donacionSolicitudService: DonacionSolicitudService,
              private usuarioService: UsuarioService,
              private organizacionService: OrganizacionService,
              private estadoService: EstadoService,
              protected route: Router,
              private activatedRoute:ActivatedRoute){

    this.activatedRoute.params.subscribe(
      params => {
        this.donacionSolicitudId=params['id'];

        if( !isNaN(this.donacionSolicitudId)  )
        {
          this.esEditar =true;
          this.donacionSolicitudService.get(this.donacionSolicitudId)
          .subscribe(
            u => {
              console.log(u);
              this.completarDatosFormulario(u)
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
    this.organizacionService.getAll().subscribe(data =>{
      this.organizaciones = data;
      console.log(this.organizaciones)
    });
    this.estadoService.getAll().subscribe(data =>{
      this.estados = data;
      console.log(this.estados)
    });
  }

  completarDatosFormulario(donacionSolicitud:IDonacionSolicitud){
    this.titulo = donacionSolicitud.titulo
    this.observacion = donacionSolicitud.observacion
    this.organizacionId = donacionSolicitud.organizacionId
    this.ownerId = donacionSolicitud.ownerId
    this.estadoId = donacionSolicitud.estadoId
    this.donaciones = donacionSolicitud.donaciones
    this.cantidadActual = donacionSolicitud.cantidadActual
    this.cantidadFin = donacionSolicitud.cantidadFin
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
    this.validar(this.donacionSolicitudForm);
      if(this.donacionSolicitudForm.valid){
        var donacionSolicitud:IDonacionSolicitud = {
          id:0,
          titulo : this.titulo,
          observacion : this.observacion,
          cantidadFin: parseInt(this.cantidadFin.toString()),
          cantidadActual:parseInt(this.cantidadActual.toString()),
          organizacionId: parseInt(this.organizacionId.toString()),
          organizacion:undefined,
          ownerId : parseInt(this.ownerId.toString()),
          owner : undefined,
          estadoId : parseInt(this.estadoId.toString()),
          estado : undefined,
          donaciones : this.donaciones
          };

        if(this.esEditar){

          donacionSolicitud.id = parseInt(this.donacionSolicitudId.toString())

          this.donacionSolicitudService.update(this.donacionSolicitudId,donacionSolicitud).subscribe( r =>{
                        this.route.navigate(['/donacion-solicitud'])
                        },
                        ()=> alert("No se pudo actualizar, por un error"));
        }else{

          this.donacionSolicitudService.create(donacionSolicitud).subscribe(()=>{
                        alert("Creación Exitosa")
                        this.route.navigate(['/donacion-solicitud'])
                        },
                        ()=> alert("No se pudo actualizar, por un error"));
        }
      }
    }
}
