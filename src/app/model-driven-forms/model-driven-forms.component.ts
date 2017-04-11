import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators} from "@angular/forms";

@Component({
  selector: 'app-model-driven-forms',
  templateUrl: './model-driven-forms.component.html',
  styleUrls: ['./model-driven-forms.component.css']
})

export class ModelDrivenFormsComponent implements OnInit {
  userForm = new FormGroup({
    name: new FormControl('Mark', [Validators.required, Validators.minLength(4), Validators.maxLength(10)]),
    email: new FormControl(),
    address: new FormGroup({
      street: new FormControl(),
      city: new FormControl(),
      postalCode: new FormControl(null, Validators.pattern(/^[0-9]{5}$/))
    })
  });
  constructor() { }

  ngOnInit() {
  }

  onSubmit(){
    console.log(this.userForm.value);
  }

}
