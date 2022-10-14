import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor() { }

  name=""
  phnum=""
gender=""
email=""
address=""
pincode=""
blood=""
dob=""
age=""
pname=""
password=""
conpass=""

readValues=()=>{
  let data={
    "name":this.name,
    "phnum":this.phnum,
    "gender":this.gender,
    "email":this.email,
    "address":this.address,
    "pincode":this.pincode,
    "blood":this.blood,
    "dob":this.dob,
    "age":this.age,
    "pname":this.pname,
    "password":this.password,
    "conpass":this.conpass
  }
  console.log(data)
  alert("ok")
}
  ngOnInit(): void {
  }

}
