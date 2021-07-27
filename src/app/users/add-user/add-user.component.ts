import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Address } from 'src/app/models/address.model';
import { User } from 'src/app/models/user.models';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  userForm: FormGroup | any;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.initUserForm();
  }

  initUserForm() {
    this.userForm = this.formBuilder.group({
      firstname: this.formBuilder.control("", [Validators.required, Validators.minLength(5)]),
      lastname: this.formBuilder.control("", [Validators.required, Validators.minLength(5)]),
      email: this.formBuilder.control("", [Validators.required, Validators.email, Validators.minLength(5)]),
      description: this.formBuilder.control("", [Validators.required, Validators.minLength(15)]),
      dateBirth: this.formBuilder.control("", Validators.required),
      address: this.formBuilder.group({
        street: this.formBuilder.control("", Validators.required),
        state: this.formBuilder.control("", Validators.required),
        zip: this.formBuilder.control("", Validators.required),
        city: this.formBuilder.control("", Validators.required),
      })
    });
  }

  onSubmit():void {
    const dataUser = this.userForm.value;
    const address = new Address(dataUser.street, dataUser.state, dataUser.zip, dataUser.city);
    const user = new User(dataUser.firstname,
      dataUser.lastname,
      dataUser.email,
      address,
      dataUser.description,
      dataUser.dataBirth);
    console.log(dataUser.firstname);
  }
}
