import { Component, OnInit, Input } from '@angular/core';
import { OrdenPago } from '../orden';
import { OrdenPagoService } from '../orden.service';
import { IfStmt } from '@angular/compiler';

@Component({
  selector: 'app-ordenesPago',
  templateUrl: './ordenesPago.component.html',
  styleUrls: ['./ordenesPago.component.css']
})
export class OrdenesPagoComponent implements OnInit {
  projects: any[] = [];
  key: string;
  mostrarApiKey = true;
  ordenesPago: OrdenPago[];
  selectedOrdenPago: OrdenPago;
  newOrdenPago: OrdenPago = {
    idproyecto: null,
    idfactura: null,
    idcomservicios: null,
    concepto: null,
    cantidad: null,
    beneficiario: null,
    iban: null,
    estado: 'ACEPTADO'
  };

  constructor(private ordenService: OrdenPagoService) { }

 addOrdenPago() {
      this.ordenService.addOrdenPago(this.newOrdenPago, this.key)
      .subscribe(() => {
        this.ordenesPago.push(this.newOrdenPago);
        this.newOrdenPago = {
          idproyecto: null,
          idfactura: null,
          idcomservicios: null,
          concepto: null,
          cantidad: null,
          beneficiario: null,
          iban: null,
          estado: 'ACEPTADO'
        };
      });
    this.getOrdenesPago();
  }


  getOrdenesPago() {
    this.ordenService.getOrdenesPago(this.key)
      .subscribe((ordenesPago) => {
        this.ordenesPago = ordenesPago;
      });
  }


  validateKey() {
    this.mostrarApiKey = !this.mostrarApiKey;
    this.getOrdenesPago();
  }

  IntroduceApiKey() {
    this.mostrarApiKey = !this.mostrarApiKey;
  }


  recibeActualizacionEditableOrden($event) {
    if($event == 'actualiza')
    this.getOrdenesPago();
  }


  ngOnInit() {
  }

}
