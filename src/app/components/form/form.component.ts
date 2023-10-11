import { Component, ViewChild, OnInit, Injectable } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm, NgModel, Validators } from '@angular/forms';
import { DateTimeValidator, LowerCaseCountValidator, OnlyLowerLettersValidator } from 'src/app/validators/only-lower-letters-validator';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})

export class FormComponent {
  // @ViewChild("frm", { static: true }) frm : NgForm;
  // @ViewChild("fJob", { static: true }) fJob : NgModel;

  frm: FormGroup

  constructor(private formBuilder: FormBuilder) {
    this.frm = formBuilder.group({
      name: ["", [
        Validators.minLength(5)
      ]],
      surname: ["", [
        Validators.required
      ]],
      job: ["0"],
      address: formBuilder.group({
        country: ["", [
          LowerCaseCountValidator(2)
          // OnlyLowerLettersValidator
        ]],
        city: [""]
      }),
      date: formBuilder.group({
        startDate: ["", []],
        endDate: ["", []]
      }, { validators: [DateTimeValidator()]})
    })

    console.log(this.frm);
  }

  get name(){
    return this.frm.get("name")
  }

  get surname(){
    return this.frm.get("surname")
  }

  get country(){
    return this.frm.get("address").get("country")
  }

  get date(){
    return this.frm.get("date");
  }

  onSubmit(data): void {
    // console.log(this.frm);
    // console.log(this.frm.form);
    // console.log(this.frm.controls);
    // console.log(this.fJob.invalid);

    // console.log("Valid: " + this.frm.valid);
    // console.log("Touched: " + this.frm.touched);
    // console.log("Submitted: " + this.frm.submitted);

    // alert(data.name + " " + data.surname);

    // console.log(this.frm);
  }
}
