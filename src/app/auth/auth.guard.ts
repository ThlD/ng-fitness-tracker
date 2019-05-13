import {ActivatedRouteSnapshot, CanActivate, CanLoad, Route, RouterStateSnapshot} from '@angular/router';
import {Injectable} from '@angular/core';
import { Store } from '@ngrx/store';
import {take} from 'rxjs/operators';

import * as fromRoot from '../app.reducer';

@Injectable()
export class AuthGuard implements CanActivate, CanLoad {
  constructor(private store: Store<fromRoot.IAppState>) {}
  date = new Date();

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.store.select(fromRoot.selectIsAuthenticated).pipe(take(1));
  }

  canLoad(route: Route) {
    return this.store.select(fromRoot.selectIsAuthenticated).pipe(take(1));
  }
}
