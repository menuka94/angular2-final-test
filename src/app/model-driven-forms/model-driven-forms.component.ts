import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators, FormBuilder} from "@angular/forms";

@Component({
  selector: 'app-model-driven-forms',
  templateUrl: './model-driven-forms.component.html',
  styleUrls: ['./model-driven-forms.component.css']
})

export class ModelDrivenFormsComponent implements OnInit {
  /*
  userForm = new FormGroup({
    name: new FormControl('Mark', [Validators.required, Validators.minLength(4), Validators.maxLength(10)]),
    email: new FormControl(),
    address: new FormGroup({
      street: new FormControl(),
      city: new FormControl(),
      postalCode: new FormControl(null, Validators.pattern(/^[0-9]{5}$/))
    })
  });
  */

  userForm: FormGroup;

  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit() {
    this.userForm = this._formBuilder.group({
      name: ['Mark', [Validators.required, Validators.minLength(4), Validators.maxLength(10)]],
      email: [],
      address: this._formBuilder.group({
        street: [],
        city: [],
        postalCode: [null, [Validators.pattern(/^[0-9]{5}$/), Validators.required]]
      })
    });
  }

  onSubmit(){
    console.log(this.userForm.value);
  }

}
