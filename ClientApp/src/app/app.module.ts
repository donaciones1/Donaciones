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

@NgModule({
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
export class AppModule { }
