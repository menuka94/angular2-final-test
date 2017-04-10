import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.css']
})
export class EventBindingComponent implements OnInit {
  public title = "Event Binding Example";

  constructor() { }

  ngOnInit() {
  }

  // or the entire HTML element can be passed instead of the 'value' attribute
  onClick(value){
    console.log(value);
  }

}
