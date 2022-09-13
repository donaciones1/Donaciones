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
import { OrganizacionService } from 'src/app/services/organizacion.service';
import { UsuarioService } from 'src/app/services/usuario.service';
let OrganizacionFormComponent = class OrganizacionFormComponent {
    constructor(organizacionService, usuarioService, route, activatedRoute) {
        this.organizacionService = organizacionService;
        this.usuarioService = usuarioService;
        this.route = route;
        this.activatedRoute = activatedRoute;
        this.organizacionForm = new FormGroup({
            nombreFormControl: new FormControl('', Validators.required),
            descripcionFormControl: new FormControl('', Validators.required),
            contactoFormControl: new FormControl('', Validators.required)
        });
        this.esEditar = false;
        this.activatedRoute.params.subscribe(params => {
            this.organizacionId = params['id'];
            if (!isNaN(this.organizacionId)) {
                this.esEditar = true;
                this.organizacionService.get(this.organizacionId)
                    .subscribe(u => {
                    console.log(u);
                    this.completarDatosFormulario(u);
                }, error => console.error(error));
            }
        });
    }
    ngOnInit() {
        this.usuarioService.getAll().subscribe(data => {
            this.contactos = data;
        });
    }
    completarDatosFormulario(organizacion) {
        this.nombre = organizacion.nombre;
        this.descripcion = organizacion.descripcion;
        this.contactoId = organizacion.contactoId;
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
        this.validar(this.organizacionForm);
        if (this.organizacionForm.valid) {
            var organizacion = {
                id: 0,
                nombre: this.nombre,
                descripcion: this.descripcion,
                contactoId: parseInt(this.contactoId.toString()),
                contacto: undefined,
                usuarioOrganizacion: undefined
            };
            if (this.esEditar) {
                organizacion.id = parseInt(this.organizacionId.toString());
                this.organizacionService.update(this.organizacionId, organizacion).subscribe(r => {
                    this.route.navigate(['/organizacion']);
                }, () => alert("No se pudo actualizar, por un error"));
            }
            else {
                this.organizacionService.create(organizacion).subscribe(() => {
                    alert("Creación Exitosa");
                    this.route.navigate(['/organizacion']);
                }, () => alert("No se pudo actualizar, por un error"));
            }
        }
    }
};
OrganizacionFormComponent = __decorate([
    Component({
        selector: 'app-organizacion-form',
        templateUrl: './organizacion-form.component.html',
        styleUrls: ['./organizacion-form.component.css'],
        providers: [DatePipe]
    }),
    __metadata("design:paramtypes", [OrganizacionService,
        UsuarioService,
        Router,
        ActivatedRoute])
], OrganizacionFormComponent);
export { OrganizacionFormComponent };
//# sourceMappingURL=organizacion-form.component.js.map