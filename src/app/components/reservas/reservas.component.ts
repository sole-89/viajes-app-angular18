import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Reserva {
  destino: string;
  fecha: string;
  personas: number;
}

@Component({
  selector: 'app-reservas',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './reservas.component.html',
  styleUrl: './reservas.component.css'
})
export class ReservasComponent implements OnInit {
  destino: string = '';
  fecha: string = '';
  personas: number | null = null;

  reservas: Reserva[] = [];

  ngOnInit(): void {
    const datos = localStorage.getItem('reservas');
    if (datos) {
      this.reservas = JSON.parse(datos);
    }
  }

  guardarReserva() {
    if (
      this.destino.trim() !== '' &&
      this.fecha !== '' &&
      this.personas !== null &&
      this.personas > 0
    ) {
      const nuevaReserva: Reserva = {
        destino: this.destino,
        fecha: this.fecha,
        personas: this.personas
      };

      this.reservas.push(nuevaReserva);
      localStorage.setItem('reservas', JSON.stringify(this.reservas));

      // Limpiar formulario
      this.destino = '';
      this.fecha = '';
      this.personas = null;
    } else {
      alert('Complete todos los campos correctamente.');
    }
  }

  eliminarReserva(index: number) {
    this.reservas.splice(index, 1);
    localStorage.setItem('reservas', JSON.stringify(this.reservas));
  }
}