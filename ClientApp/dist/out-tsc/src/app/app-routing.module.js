var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DonacionSolicitudFormComponent } from './components/donacion-solicitud/donacion-solicitud-form/donacion-solicitud-form.component';
import { DonacionSolicitudComponent } from './components/donacion-solicitud/donacion-solicitud.component';
import { DonarSolicitudFormComponent } from './components/donacion-solicitud/donar-solicitud-form/donar-solicitud-form.component';
import { DonacionComponent } from './components/donaciones/donaciones.component';
import { HomeComponent } from './components/home/home.component';
import { OrganizacionFormComponent } from './components/organizacion/organizacion-form/organizacion-form.component';
import { OrganizacionComponent } from './components/organizacion/organizacion.component';
import { UsuarioFormComponent } from './components/usuario/usuario-form/usuario-form.component';
import { UsuarioComponent } from './components/usuario/usuario.component';
const routes = [
    { path: '', component: HomeComponent, pathMatch: 'full' },
    { path: 'donacion-solicitud', component: DonacionSolicitudComponent },
    { path: 'donacion-solicitud/:id', component: DonacionSolicitudFormComponent },
    { path: 'donar-solicitud/:id', component: DonarSolicitudFormComponent },
    { path: 'donacion-solicitud-crear', component: DonacionSolicitudFormComponent },
    { path: 'usuario', component: UsuarioComponent },
    { path: 'usuario/:id', component: UsuarioFormComponent },
    { path: 'usuario-crear', component: UsuarioFormComponent },
    { path: 'donacion', component: DonacionComponent },
    { path: 'organizacion', component: OrganizacionComponent },
    { path: 'organizacion/:id', component: OrganizacionFormComponent },
    { path: 'organizacion-crear', component: OrganizacionFormComponent },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = __decorate([
    NgModule({
        imports: [RouterModule.forRoot(routes)],
        exports: [RouterModule]
    })
], AppRoutingModule);
export { AppRoutingModule };
//# sourceMappingURL=app-routing.module.js.map