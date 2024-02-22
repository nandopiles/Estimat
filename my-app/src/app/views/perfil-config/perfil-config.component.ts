import { Component, ElementRef, ViewChild } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { HeaderProfileComponent } from '../../components/header-profile/header-profile.component';

@Component({
  selector: 'app-perfil-config',
  standalone: true,
  imports: [HeaderComponent, HeaderProfileComponent],
  templateUrl: './perfil-config.component.html',
  styleUrl: './perfil-config.component.css'
})
export class PerfilConfigComponent {
  @ViewChild('passwordInput') passwordInput!: ElementRef<HTMLInputElement>;

  togglePasswordVisibility(): void {
    const inputType = this.passwordInput.nativeElement.type;
    if (inputType === 'password') {
      this.passwordInput.nativeElement.type = 'text';
    } else {
      this.passwordInput.nativeElement.type = 'password';
    }
  }
}
