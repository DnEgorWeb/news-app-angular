import { CanActivateFn, Router } from "@angular/router";

import { AuthService } from "../services/auth.service";
import { inject } from "@angular/core";

export const canActivate: CanActivateFn = () => {
  if (inject(AuthService).isAuthenticated()) {
    return true
    
  }
  return inject(Router).parseUrl('/auth')
}
