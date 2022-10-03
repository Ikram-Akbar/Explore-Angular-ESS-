import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  color = new FormControl("");

  myForm = new FormGroup({
    username: new FormControl(""),
    password: new FormControl(""),
    textarea: new FormControl("")
  })

  onSubmit() {
    console.warn(this.myForm.value)
  }
}
