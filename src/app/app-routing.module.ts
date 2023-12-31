import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from "./composants/login/login.component";
import {SortiesComponent} from "./composants/sorties/sorties.component";
import {AuthGuard} from "./gardiens/auth.guard";
import {LogoutComponent} from "./composants/logout/logout.component";
import {RechercheSortieComponent} from "./composants/recherche-sortie/recherche-sortie.component";

const routes: Routes = [
  {path: "", component: LoginComponent},
  {path: 'login', component: LoginComponent},
  {path: 'logout', component: LogoutComponent},
  {path: 'recherche-sortie', component: RechercheSortieComponent},
  {path: 'sorties', component: SortiesComponent, canActivate: [AuthGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
