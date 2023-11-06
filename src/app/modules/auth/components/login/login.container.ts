import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { catchError, finalize, of } from 'rxjs';

import { AuthService } from '../../services/auth.service';
import { ApiError } from 'src/app/common/services/api/api-response';
import { LoginComponent } from './login.component'

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, LoginComponent],
  templateUrl: './login.container.html',
})
export class LoginContainer {
  submitting = false
  error = ''

  constructor(private authService: AuthService) { }

  onSubmit(form: NgForm) {
    this.submitting = true
    this.error = ''
    const { email, password } = form.value
    this.authService
      .login(email, password)
      .pipe(
        catchError((err: ApiError) => {
          if (err.errors) {
            this.error = Object.values(err.errors).join(', ')
          } else {
            alert(err.message)
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
