var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { DonacionSolicitudService } from 'src/app/services/donacionSolicitud.service';
let DonacionSolicitudComponent = class DonacionSolicitudComponent {
    constructor(donacionSolicitudService) {
        this.donacionSolicitudService = donacionSolicitudService;
    }
    ngOnInit() {
        this.donacionSolicitudService.getAll().subscribe(datos => {
            this.donacionSolicitudes = datos;
        });
    }
    finalizar(id) {
        this.donacionSolicitudService.finalizarSolicitud(id).subscribe(() => {
            this.donacionSolicitudService.getAll().subscribe(datos => {
                this.donacionSolicitudes = datos;
            });
            alert("Solicitud Finalizada");
        });
    }
};
DonacionSolicitudComponent = __decorate([
    Component({
        selector: 'app-donacion-solicitud',
        templateUrl: './donacion-solicitud.component.html',
        styleUrls: ['./donacion-solicitud.component.css']
    }),
    __metadata("design:paramtypes", [DonacionSolicitudService])
], DonacionSolicitudComponent);
export { DonacionSolicitudComponent };
//# sourceMappingURL=donacion-solicitud.component.js.map