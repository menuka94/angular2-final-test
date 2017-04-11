import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
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
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    CommonModule,
    AngularFireModule.initializeApp(firebaseConfig),
  ],
  providers: [],
  bootstrap: [AppComponent]


})



export class AppModule { }
