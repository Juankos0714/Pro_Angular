import { Component } from '@angular/core';

@Component({
  selector: 'app-saludo',
  templateUrl: './saludo.component.html',
  styleUrls: ['./saludo.component.css']
})
export class SaludoComponent {
  mensaje: string = '¡Hola desde Angular!';

  cambiarMensaje() {
    this.mensaje = '¡El mensaje ha cambiado!';
  }
}
