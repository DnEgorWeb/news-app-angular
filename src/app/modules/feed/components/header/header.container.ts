import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from 'src/app/modules/auth/services/auth.service';
import { HeaderComponent } from './header.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, HeaderComponent],
  templateUrl: './header.container.html',
})
export class HeaderContainer {
  submitting = false

  constructor(private authService: AuthService) { }

  onLogout() {
    this.submitting = true
    this.authService.logout().subscribe(() => {
      this.submitting = false
    })
  }
}
