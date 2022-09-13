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
import { OrganizacionService } from 'src/app/services/organizacion.service';
import { UsuarioService } from 'src/app/services/usuario.service';
let UsuarioComponent = class UsuarioComponent {
    constructor(usuarioService, organizacionService) {
        this.usuarioService = usuarioService;
        this.organizacionService = organizacionService;
        this.organizacionService.getAll().subscribe(datos => {
            this.organizaciones = datos;
        });
        this.usuarioService.getAll().subscribe(datos => {
            this.usuarios = datos;
        });
    }
    ngOnInit() {
    }
    borrar(usuario) {
        if (!usuario.usuarioOrganizaciones || usuario.usuarioOrganizaciones.length == 0) {
            this.usuarioService.delete(usuario.id).subscribe(() => this.usuarios = this.usuarios.filter(a => a.id != usuario.id));
        }
        else {
            alert("no se puede borrar un usuario con organizaciones afiliadas");
        }
    }
    nombreOrganizacion(id) {
        return this.organizaciones.find(w => w.id == id).nombre;
    }
};
UsuarioComponent = __decorate([
    Component({
        selector: 'app-usuario',
        templateUrl: './usuario.component.html',
        styleUrls: ['./usuario.component.css']
    }),
    __metadata("design:paramtypes", [UsuarioService,
        OrganizacionService])
], UsuarioComponent);
export { UsuarioComponent };
//# sourceMappingURL=usuario.component.js.map