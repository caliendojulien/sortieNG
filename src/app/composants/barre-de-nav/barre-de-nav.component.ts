import {Component} from '@angular/core';
import {MenuItem} from "primeng/api";

@Component({
  selector: 'app-barre-de-nav',
  templateUrl: './barre-de-nav.component.html',
  styleUrls: ['./barre-de-nav.component.scss']
})
export class BarreDeNavComponent {
  liens: MenuItem[];

  constructor() {
    this.liens = [{
      label: 'Se connecter',
      icon: '/assets/dock/icons8-connexion-50.png',
      routerLink: "/login"
    },
      {
        label: 'Sorties',
        icon: '/assets/dock/icons8-confettis-50.png',
        routerLink: "/sorties"
      },
      {
        label: 'Se déconnecter',
        icon: '/assets/dock/icons8-sortie-durgence-50.png',
        routerLink: "/logout"
      }
    ];
  }
}
