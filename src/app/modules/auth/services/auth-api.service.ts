import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { ApiService } from 'src/app/common/services/api/api.service';
import { config } from '../../../common/config';

@Injectable()
export class AuthApiService extends ApiService {
  constructor(client: HttpClient) {
    super(client)
  }

  login(email: string, password: string) {
    return this.post(`${config.BASE_URL}/login`, { email, password })
  }

  logout() {
    return this.post(`${config.BASE_URL}/logout`)
  }
}