import { Component, OnInit, Input } from '@angular/core';
import { OrdenPago } from '../orden';
import { OrdenPagoService } from '../orden.service';


@Component({
  // tslint:disable-next-line:component-selector
  selector: '[app-editable-orden]',
  templateUrl: './editable-orden.component.html',
  styleUrls: ['./editable-orden.component.css']
})
export class EditableOrdenPagoComponent implements OnInit {

  @Input('orden') orden: OrdenPago;
 



  editable = false;


  constructor(private ordenService: OrdenPagoService) { }


  onEdit() {
    this.editable = ! this.editable;
    if (this.editable === true) {
      this.ordenService.editOrdenPago(this.orden);
    }

  }

  onDelete(orden: OrdenPago) {
    this.editable = ! this.editable;

  }

  ngOnInit() {
  }

}
