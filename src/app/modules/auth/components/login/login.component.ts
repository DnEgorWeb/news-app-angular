import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';

import { AuthService } from '../../services/auth.service';
import { AuthApiService } from '../../services/auth-api.service';
import { LocalStorageService } from 'src/app/common/services/storage/local-storage.service';
import { LoadingIndicator } from 'src/app/common/components/loading-indicator/loading-indicator.component';

@Component({
  selector: 'app-login-component',
  standalone: true,
  imports: [CommonModule, FormsModule, LoadingIndicator],
  providers: [AuthService, AuthApiService, LocalStorageService],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  @Input() submitting: boolean = false
  @Input() error: string | null = null

  @Output() submitForm = new EventEmitter<NgForm>()

  onFormSubmitted(ngForm: NgForm) {
    this.submitForm.emit(ngForm)
  }
}
