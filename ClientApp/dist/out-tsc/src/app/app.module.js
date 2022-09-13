var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DonacionSolicitudFormComponent } from './components/donacion-solicitud/donacion-solicitud-form/donacion-solicitud-form.component';
import { DonacionSolicitudComponent } from './components/donacion-solicitud/donacion-solicitud.component';
import { UsuarioComponent } from './components/usuario/usuario.component';
import { UsuarioFormComponent } from './components/usuario/usuario-form/usuario-form.component';
import { OrganizacionFormComponent } from './components/organizacion/organizacion-form/organizacion-form.component';
import { OrganizacionComponent } from './components/organizacion/organizacion.component';
import { DonarSolicitudFormComponent } from './components/donacion-solicitud/donar-solicitud-form/donar-solicitud-form.component';
import { DonacionComponent } from './components/donaciones/donaciones.component';
import { HomeComponent } from './components/home/home.component';
let AppModule = class AppModule {
};
AppModule = __decorate([
    NgModule({
        declarations: [
            AppComponent,
            DonacionSolicitudFormComponent,
            DonacionSolicitudComponent,
            UsuarioComponent,
            UsuarioFormComponent,
            OrganizacionFormComponent,
            DonarSolicitudFormComponent,
            OrganizacionComponent,
            DonacionComponent,
            HomeComponent
        ],
        imports: [
            BrowserModule,
            AppRoutingModule,
            ReactiveFormsModule,
            FormsModule,
            HttpClientModule,
        ],
        providers: [],
        bootstrap: [AppComponent]
    })
], AppModule);
export { AppModule };
//# sourceMappingURL=app.module.js.map