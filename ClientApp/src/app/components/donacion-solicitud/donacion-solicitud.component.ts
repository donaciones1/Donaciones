import { Component, OnInit } from '@angular/core';
import { IDonacionSolicitud } from 'src/app/models/donacionSolicitud';
import { DonacionSolicitudService } from 'src/app/services/donacionSolicitud.service';

@Component({
  selector: 'app-donacion-solicitud',
  templateUrl: './donacion-solicitud.component.html',
  styleUrls: ['./donacion-solicitud.component.css']
})
export class DonacionSolicitudComponent implements OnInit {
  public donacionSolicitudes: IDonacionSolicitud[];

  constructor(private donacionSolicitudService: DonacionSolicitudService) {
  }

  ngOnInit() {
    this.donacionSolicitudService.getAll().subscribe(datos =>{
      this.donacionSolicitudes = datos
    });
  }
  finalizar(id:number){
    this.donacionSolicitudService.finalizarSolicitud(id).subscribe(() =>{
      this.donacionSolicitudService.getAll().subscribe(datos =>{
        this.donacionSolicitudes = datos
      });
      alert("Solicitud Finalizada")
    })
  }
}
