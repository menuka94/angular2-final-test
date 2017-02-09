import {Component, OnInit, NgModule} from '@angular/core';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css']
})

@NgModule({
  declarations: [
    HelloComponent
  ],
  exports: [
    HelloComponent
  ]
})

export class HelloComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
