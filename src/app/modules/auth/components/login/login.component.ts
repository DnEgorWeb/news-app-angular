import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';

import { AuthService } from '../../services/auth.service';
import { AuthApiService } from '../../services/auth-api.service';
import { LocalStorageService } from 'src/app/common/services/storage/local-storage.service';
import { catchError, finalize, of } from 'rxjs';
import { ApiError } from 'src/app/common/services/api/api-response';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  providers: [AuthService, AuthApiService, LocalStorageService],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  submitting = false

  constructor(private authService: AuthService) {}

  onSubmit(form: NgForm) {
    this.submitting = true
    const { email, password } = form.value
    this.authService
      .login(email, password)
      .pipe(
        catchError((err: ApiError) => {
          if (err.errors) {
            console.log('err.errors: ', err.errors)
          } else {
            // do the alert
          }
          return of()
        }),
        finalize(() => {
          this.submitting = false
        })
      )
      .subscribe(smth => {
        console.log('smth: ', smth)
      }) // handle client error here
  }
}
