import {Routes, RouterModule} from "@angular/router";
import {PipesComponent} from "./pipes/pipes.component";
import {DirectivesExampleComponent} from "./directives-example/directives-example.component";
import {NgModule} from "@angular/core";
import {NameComponent} from "./name/name.component";

const routes: Routes = [
  {path: 'pipes', component: PipesComponent},
  {path: 'directives_example', component: DirectivesExampleComponent},
  {path: 'names/:id', component: NameComponent}
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

