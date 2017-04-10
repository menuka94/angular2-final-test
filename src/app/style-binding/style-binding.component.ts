import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-style-binding',
  templateUrl: './style-binding.component.html',
  styleUrls: ['./style-binding.component.css']
})
export class StyleBindingComponent implements OnInit {
  public title  = "Style Binding Example";
  public applyClass = true;
  public applyBlue = true;

  constructor() { }

  ngOnInit() {
  }

}
