import {Routes, RouterModule} from "@angular/router";
import {PipesComponent} from "./pipes/pipes.component";
import {DirectivesExampleComponent} from "./directives-example/directives-example.component";
import {NgModule} from "@angular/core";
import {NameComponent} from "./name/name.component";
import {AppComponent} from "./app.component";
import {PageNotFoundComponent} from "./page-not-found/page-not-found.component";

const routes: Routes = [
  {path: '', component: AppComponent},
  {path: 'pipes', component: PipesComponent},
  {path: 'directives_example', component: DirectivesExampleComponent},
  {path: 'names/:id', component: NameComponent},
  {path: 'names', redirectTo: '', pathMatch: 'full'},
  {path: '**', component: PageNotFoundComponent}, // should always come at last
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule{

}

