import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives-example',
  templateUrl: './directives-example.component.html',
  styleUrls: ['./directives-example.component.css']
})

export class DirectivesExampleComponent implements OnInit {
  public title = "Directives Example";
  public showElement = true;
  public color = 'red';
  public colors = ['red', 'green', 'blue'];

  public classOne = true;
  public classTwo = true;

  public style = 'italic';
  public size = '30px';

  constructor() { }

  ngOnInit() {
  }

  toggle(){
    this.classOne = !this.classOne;
    this.classTwo = !this.classTwo;
  }

}
