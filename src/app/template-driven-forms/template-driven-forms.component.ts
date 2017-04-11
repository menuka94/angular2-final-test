import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-driven-forms',
  templateUrl: './template-driven-forms.component.html',
  styleUrls: ['./template-driven-forms.component.css']
})
export class TemplateDrivenFormsComponent implements OnInit {
  public name: string;
  public email: string;
  public street: string;
  public city: string;
  public postalCode: number;

  constructor() { }

  ngOnInit() {
  }

  onSubmit(value: any){
    console.log(value);
  }


}
