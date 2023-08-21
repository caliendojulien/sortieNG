import {Component, Inject} from '@angular/core';
import {AuthService} from "../../services/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss']
})
export class LogoutComponent {

  constructor(
    @Inject(AuthService) private auth: AuthService,
    @Inject(Router) private router: Router
  ) {
    this.auth.logout();
    this.router.navigate(['/login']).then(() => console.log("Déconnection"))
  }
}
