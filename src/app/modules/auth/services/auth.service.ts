import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject, catchError, fromEvent, map, of, tap } from 'rxjs';
import { AuthApiService } from './auth-api.service';
import { LocalStorageService } from 'src/app/common/services/storage/local-storage.service';
import { User } from '../model/user';
import { Router } from '@angular/router';

@Injectable()
export class AuthService {
  constructor(
    private authApiService: AuthApiService,
    private storage: LocalStorageService,
    private router: Router,
  ) {}

  login(email: string, password: string): Observable<any> {
    return this.authApiService
      .login(email, password)
      .pipe(
        tap(() => {
          this.storage.put('user', new User(email, password))
          this.router.navigate([''])
        }),
      )
  }
  
  logout() {
    return this.authApiService.logout()
      .pipe(
        tap(() => {
          this.storage.remove('user')
          this.router.navigate(['/auth'])
        }),
      )
  }

  public isAuthenticated(): boolean {
    return this.storage.get<User>('user', true) !== null
  }
}