import {Router, UrlTree} from '@angular/router';
import {AuthService} from "../services/auth.service";
import {Observable} from "rxjs";
import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root',
})
export class AuthGuard {
  constructor(public auth: AuthService, public router: Router) {
  }

  public canActivate():
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    if (!this.auth.estConnecte()) {
      window.alert("Interdit d'accès");
      this.router.navigate(['login']).then(() => console.log("Navigation vers /login"));
    }
    return true;
  }
}
