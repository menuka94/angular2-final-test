import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {AngularFireModule} from "angularfire2";
import {firebaseConfig} from "../environments/firebase.config";
import { StyleBindingComponent } from './style-binding/style-binding.component';
import { EventBindingComponent } from './event-binding/event-binding.component';
import { DirectivesExampleComponent } from './directives-example/directives-example.component';
import {CommonModule} from "@angular/common";
import { InputsAndOutputsParentComponent } from './inputs-and-outputs-parent/inputs-and-outputs-parent.component';
import { InputsAndOutputsChildComponent } from './inputs-and-outputs-child/inputs-and-outputs-child.component';
import { PipesComponent } from './pipes/pipes.component';
import { TemplateDrivenFormsComponent } from './template-driven-forms/template-driven-forms.component';
import { ModelDrivenFormsComponent } from './model-driven-forms/model-driven-forms.component';
import {RouterModule, Routes, Router} from "@angular/router";
import {AppRoutingModule} from "./app-routing.module";
import { NameComponent } from './name/name.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    StyleBindingComponent,
    EventBindingComponent,
    DirectivesExampleComponent,
    InputsAndOutputsParentComponent,
    InputsAndOutputsChildComponent,
    PipesComponent,
    TemplateDrivenFormsComponent,
    ModelDrivenFormsComponent,
    NameComponent,
    PageNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    CommonModule,
    AngularFireModule.initializeApp(firebaseConfig),
  ],
  providers: [],
  bootstrap: [AppComponent]


})



export class AppModule { }
