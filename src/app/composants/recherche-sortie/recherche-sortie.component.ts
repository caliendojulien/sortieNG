import {Component} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-recherche-sortie',
  templateUrl: './recherche-sortie.component.html',
  styleUrls: ['./recherche-sortie.component.scss']
})
export class RechercheSortieComponent {

  rechercheForm: FormGroup = new FormGroup({
    site: new FormControl(''),
    nom: new FormControl(''),
    debut: new FormControl(''),
    fin: new FormControl(''),
    jesuisorga: new FormControl(''),
    jesuisinscrit: new FormControl(''),
    jenesuispasinscrit: new FormControl(''),
    passees: new FormControl(''),
  });

  public submitRechercheForm(datas: any): void {
    console.log(datas);
  }
}
