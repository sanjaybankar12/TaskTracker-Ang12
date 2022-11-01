import { Injectable } from "@angular/core";
import { CanActivate, RouterStateSnapshot, ActivatedRouteSnapshot , UrlTree} from '@angular/router';

import { Observable } from 'rxjs';

@Injectable({
  providedIn:'root'
})
export class MyGuard implements CanActivate{

  canActivate(route:ActivatedRouteSnapshot, state:RouterStateSnapshot) : Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return true;
  }
}