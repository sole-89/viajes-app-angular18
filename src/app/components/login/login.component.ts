import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  usuario: string = '';
  password: string = '';
  mensajeError: string = '';

  constructor(private router: Router) {}

  ingresar() {
    if (this.usuario === 'admin' && this.password === '1234') {
      // Guardar usuario en localStorage
      localStorage.setItem('cliente', this.usuario);

      // Limpiar mensaje de error
      this.mensajeError = '';

      // Redirigir a la página de reservas
      this.router.navigate(['/reservas']);
    } else {
      this.mensajeError = 'Usuario o contraseña incorrectos';
    }
  }
}