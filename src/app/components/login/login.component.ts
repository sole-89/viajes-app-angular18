import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  cliente: string = '';

  constructor(private router: Router) {}

  ingresar() {
    if (this.cliente.trim() !== '') {
      localStorage.setItem('cliente', this.cliente);
      this.router.navigate(['/reservas']);
    } else {
      alert('Ingrese su nombre');
    }
  }
}