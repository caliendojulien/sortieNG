import {Component, Inject} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ApiService} from "../../services/api.service";
import {Stagiaire} from "../../modeles/stagiaire";
import {AuthService} from "../../services/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  constructor(
    @Inject(ApiService) private api: ApiService,
    @Inject(AuthService) private auth: AuthService,
    @Inject(Router) private router: Router
  ) {
    if (this.auth.estConnecte()) {
      this.router.navigate(['/sorties']).then(() => console.log("Déjà connecté"))
    }
  }

  loginForm: FormGroup = new FormGroup({
    email: new FormControl('', [
      Validators.required,
      Validators.maxLength(255),
      Validators.email
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.maxLength(255)
    ])
  });

  public submitLoginForm(datas: Stagiaire): void {
    console.log(datas);
    this.api.postAuth(datas).subscribe(
      resource => {
        this.auth.login(resource.token);
      }
    );
  }
}
