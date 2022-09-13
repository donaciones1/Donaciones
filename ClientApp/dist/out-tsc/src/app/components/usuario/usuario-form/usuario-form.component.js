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
import { UsuarioService } from 'src/app/services/usuario.service';
let UsuarioFormComponent = class UsuarioFormComponent {
    constructor(usuarioService, route, activatedRoute) {
        this.usuarioService = usuarioService;
        this.route = route;
        this.activatedRoute = activatedRoute;
        this.usuarioForm = new FormGroup({
            nombreFormControl: new FormControl('', Validators.required),
            apellidoFormControl: new FormControl('', Validators.required)
        });
        this.activatedRoute.params.subscribe(params => {
            this.usuarioId = params['id'];
            if (!isNaN(this.usuarioId)) {
                this.esEditar = true;
                this.usuarioService.get(this.usuarioId)
                    .subscribe(u => {
                    console.log(u);
                    this.completarDatosFormulario(u);
                }, error => console.error(error));
            }
        });
    }
    completarDatosFormulario(usuario) {
        this.nombre = usuario.nombre;
        this.apellido = usuario.apellido;
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
        this.validar(this.usuarioForm);
        if (this.usuarioForm.valid) {
            var usuario = {
                id: 0,
                apellido: this.apellido,
                nombre: this.nombre,
                usuarioOrganizaciones: undefined
            };
            if (this.esEditar) {
                usuario.id = parseInt(this.usuarioId.toString());
                this.usuarioService.update(this.usuarioId, usuario).subscribe(r => {
                    this.route.navigate(['/usuario']);
                }, () => alert("No se pudo actualizar, por un error"));
            }
            else {
                this.usuarioService.create(usuario).subscribe(() => {
                    alert("Creación Exitosa");
                    this.route.navigate(['/usuario']);
                }, () => alert("No se pudo actualizar, por un error"));
            }
        }
    }
};
UsuarioFormComponent = __decorate([
    Component({
        selector: 'app-usuario-form',
        templateUrl: './usuario-form.component.html',
        styleUrls: ['./usuario-form.component.css'],
        providers: [DatePipe]
    }),
    __metadata("design:paramtypes", [UsuarioService,
        Router,
        ActivatedRoute])
], UsuarioFormComponent);
export { UsuarioFormComponent };
//# sourceMappingURL=usuario-form.component.js.map