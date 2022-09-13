var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
const baseUrl = 'http://localhost:5000/api/donacionSolicitud';
let DonacionSolicitudService = class DonacionSolicitudService {
    constructor(http) {
        this.http = http;
    }
    getAll() {
        return this.http.get(baseUrl);
    }
    get(id) {
        return this.http.get(`${baseUrl}/${id}`);
    }
    create(data) {
        return this.http.post(baseUrl, data);
    }
    update(id, data) {
        return this.http.put(`${baseUrl}/${id}`, data);
    }
    delete(id) {
        return this.http.delete(`${baseUrl}/${id}`);
    }
    finalizarSolicitud(id) {
        return this.http.put(`${baseUrl}/finalizarSolicitud/${id}`, null);
    }
    donacionesSolicitudTotales() {
        return this.http.get(`${baseUrl}/cantidadSolicitudes`);
    }
    donacionesSolicitudFinalizadas() {
        return this.http.get(`${baseUrl}/solicitudes/finalizadas`);
    }
};
DonacionSolicitudService = __decorate([
    Injectable({
        providedIn: 'root'
    }),
    __metadata("design:paramtypes", [HttpClient])
], DonacionSolicitudService);
export { DonacionSolicitudService };
//# sourceMappingURL=donacionSolicitud.service.js.map