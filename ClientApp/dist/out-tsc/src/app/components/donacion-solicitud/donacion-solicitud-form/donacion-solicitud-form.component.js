var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { DonacionSolicitudService } from 'src/app/services/donacionSolicitud.service';
import { EstadoService } from 'src/app/services/estado.service copy';
import { OrganizacionService } from 'src/app/services/organizacion.service';
import { UsuarioService } from 'src/app/services/usuario.service';
let DonacionSolicitudFormComponent = class DonacionSolicitudFormComponent {
    constructor(donacionSolicitudService, usuarioService, organizacionService, estadoService, route, activatedRoute) {
        this.donacionSolicitudService = donacionSolicitudService;
        this.usuarioService = usuarioService;
        this.organizacionService = organizacionService;
        this.estadoService = estadoService;
        this.route = route;
        this.activatedRoute = activatedRoute;
        this.cantidadActual = 0;
        this.donacionSolicitudForm = new FormGroup({
            tituloFormControl: new FormControl('', Validators.required),
            cantidadFinFormControl: new FormControl(''),
            observacionFormControl: new FormControl(),
            ownerFormControl: new FormControl('', Validators.required),
            estadoFormControl: new FormControl('', Validators.required),
            organizacionFormControl: new FormControl('', Validators.required),
        });
        this.esEditar = false;
        this.ownerId = 1;
        this.estadoId = 1;
        this.organizacionId = 1;
        this.donacionSolicitudItems = [];
        this.donaciones = [];
        this.activatedRoute.params.subscribe(params => {
            this.donacionSolicitudId = params['id'];
            if (!isNaN(this.donacionSolicitudId)) {
                this.esEditar = true;
                this.donacionSolicitudService.get(this.donacionSolicitudId)
                    .subscribe(u => {
                    console.log(u);
                    this.completarDatosFormulario(u);
                }, error => console.error(error));
            }
        });
    }
    ngOnInit() {
        this.usuarioService.getAll().subscribe(data => {
            this.usuarios = data;
        });
        this.organizacionService.getAll().subscribe(data => {
            this.organizaciones = data;
            console.log(this.organizaciones);
        });
        this.estadoService.getAll().subscribe(data => {
            this.estados = data;
            console.log(this.estados);
        });
    }
    completarDatosFormulario(donacionSolicitud) {
        this.titulo = donacionSolicitud.titulo;
        this.observacion = donacionSolicitud.observacion;
        this.organizacionId = donacionSolicitud.organizacionId;
        this.ownerId = donacionSolicitud.ownerId;
        this.estadoId = donacionSolicitud.estadoId;
        this.donaciones = donacionSolicitud.donaciones;
        this.cantidadActual = donacionSolicitud.cantidadActual;
        this.cantidadFin = donacionSolicitud.cantidadFin;
    }
    validar(formGroup) {
        for (let i in formGroup.controls) {
            if (formGroup.controls.hasOwnProperty(i)) {
                formGroup.controls[i].updateValueAndValidity();
                formGroup.controls[i].markAsDirty();
            }
        }
    }
    guardar() {
        this.validar(this.donacionSolicitudForm);
        if (this.donacionSolicitudForm.valid) {
            var donacionSolicitud = {
                id: 0,
                titulo: this.titulo,
                observacion: this.observacion,
                cantidadFin: parseInt(this.cantidadFin.toString()),
                cantidadActual: parseInt(this.cantidadActual.toString()),
                organizacionId: parseInt(this.organizacionId.toString()),
                organizacion: undefined,
                ownerId: parseInt(this.ownerId.toString()),
                owner: undefined,
                estadoId: parseInt(this.estadoId.toString()),
                estado: undefined,
                donaciones: this.donaciones
            };
            if (this.esEditar) {
                donacionSolicitud.id = parseInt(this.donacionSolicitudId.toString());
                this.donacionSolicitudService.update(this.donacionSolicitudId, donacionSolicitud).subscribe(r => {
                    this.route.navigate(['/donacion-solicitud']);
                }, () => alert("No se pudo actualizar, por un error"));
            }
            else {
                this.donacionSolicitudService.create(donacionSolicitud).subscribe(() => {
                    alert("Creación Exitosa");
                    this.route.navigate(['/donacion-solicitud']);
                }, () => alert("No se pudo actualizar, por un error"));
            }
        }
    }
};
DonacionSolicitudFormComponent = __decorate([
    Component({
        selector: 'app-donacion-solicitud-form',
        templateUrl: './donacion-solicitud-form.component.html',
        styleUrls: ['./donacion-solicitud-form.component.css'],
        providers: [DatePipe]
    }),
    __metadata("design:paramtypes", [DonacionSolicitudService,
        UsuarioService,
        OrganizacionService,
        EstadoService,
        Router,
        ActivatedRoute])
], DonacionSolicitudFormComponent);
export { DonacionSolicitudFormComponent };
//# sourceMappingURL=donacion-solicitud-form.component.js.map