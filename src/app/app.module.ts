import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {LoginComponent} from './composants/login/login.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {InputTextModule} from "primeng/inputtext";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {AuthInterceptor} from "./intercepteurs/auth.interceptor";
import {SortiesComponent} from './composants/sorties/sorties.component';
import {PanelModule} from "primeng/panel";
import {FieldsetModule} from "primeng/fieldset";
import {ButtonModule} from "primeng/button";
import {BarreDeNavComponent} from './composants/barre-de-nav/barre-de-nav.component';
import {DockModule} from "primeng/dock";
import {LogoutComponent} from './composants/logout/logout.component';
import {PasswordModule} from "primeng/password";
import {RechercheSortieComponent} from './composants/recherche-sortie/recherche-sortie.component';
import {CheckboxModule} from "primeng/checkbox";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SortiesComponent,
    BarreDeNavComponent,
    LogoutComponent,
    RechercheSortieComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    InputTextModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    PanelModule,
    FieldsetModule,
    ButtonModule,
    DockModule,
    PasswordModule,
    CheckboxModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
