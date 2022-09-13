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
import { DonacionService } from 'src/app/services/donacion.service';
import { DonacionSolicitudService } from 'src/app/services/donacionSolicitud.service';
import { UsuarioService } from 'src/app/services/usuario.service';
let DonarSolicitudFormComponent = class DonarSolicitudFormComponent {
    constructor(donacionSolicitudService, donarService, usuarioService, route, activatedRoute) {
        this.donacionSolicitudService = donacionSolicitudService;
        this.donarService = donarService;
        this.usuarioService = usuarioService;
        this.route = route;
        this.activatedRoute = activatedRoute;
        this.donacionForm = new FormGroup({
            cantidadFormControl: new FormControl('', Validators.required),
            donanteFormControl: new FormControl('', Validators.required),
            observacionFormControl: new FormControl(),
        });
        this.activatedRoute.params.subscribe(params => {
            this.donarSolicitudId = params['id'];
            if (!isNaN(this.donarSolicitudId)) {
                this.donacionSolicitudService.get(this.donarSolicitudId)
                    .subscribe(ds => {
                    this.donacionSolicitud = ds;
                }, error => console.error(error));
            }
        });
    }
    ngOnInit() {
        this.usuarioService.getAll().subscribe(data => {
            this.usuarios = data;
        });
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
        this.validar(this.donacionForm);
        if (this.donacionForm.valid) {
            var donacion = {
                id: 0,
                cantidad: this.cantidad,
                donacionSolicitud: undefined,
                donacionSolicitudId: parseInt(this.donarSolicitudId.toString()),
                donante: undefined,
                donanteId: parseInt(this.donanteId.toString()),
                observacion: this.observacion
            };
            this.donarService.create(donacion).subscribe(() => {
                alert("Gracias Por su donación!!");
                this.route.navigate(['/donacion-solicitud']);
            }, () => alert("No se pudo actualizar, por un error"));
        }
    }
};
DonarSolicitudFormComponent = __decorate([
    Component({
        selector: 'app-donar-solicitud-form',
        templateUrl: './donar-solicitud-form.component.html',
        styleUrls: ['./donar-solicitud-form.component.css'],
        providers: [DatePipe]
    }),
    __metadata("design:paramtypes", [DonacionSolicitudService,
        DonacionService,
        UsuarioService,
        Router,
        ActivatedRoute])
], DonarSolicitudFormComponent);
export { DonarSolicitudFormComponent };
//# sourceMappingURL=donar-solicitud-form.component.js.map