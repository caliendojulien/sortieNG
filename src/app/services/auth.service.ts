import {Inject, Injectable} from '@angular/core';
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    @Inject(Router) private router: Router
  ) {
  }

  public login(token: string): void {
    localStorage.setItem('token', token);
    this.router.navigate(['sorties']).then(() => console.log("Navigation vers /sorties"))
  }

  public getToken(): string | null {
    return localStorage.getItem('token');
  }

  public logout(): void {
    localStorage.removeItem('token');
    this.router.navigate(['login']).then(() => console.log("Navigation vers /login"));
  }

  public estConnecte(): boolean {
    const token: string | null = localStorage.getItem('token');
    return token !== null;
  }

}
