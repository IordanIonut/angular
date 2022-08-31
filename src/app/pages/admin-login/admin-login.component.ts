import { identifierName } from '@angular/compiler';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core'
import { AbstractControl, FormBuilder, FormControl, FormControlName, FormGroup, FormGroupName, Validators } from '@angular/forms';
import { Title, Meta } from '@angular/platform-browser'
import { RouterLink } from '@angular/router';
import { __values } from 'tslib';
import { Router } from '@angular/router';

@Component({
  selector: 'admin-login',
  templateUrl: 'admin-login.component.html',
  styleUrls: ['admin-login.component.css'],
})
export class AdminLogin implements OnInit {
  rawuszn: string = ' '
  raw6l4s: string = ' '

  submitted = false;

  constructor(private formBuilder: FormBuilder,
    private router: Router) {
  }
  
  ngOnInit(): void {
    this.form = this.formBuilder.group({
      name: ['', [
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(20),
      ]
    ],
      password: ['', [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(15),
      ]
    ],
      code: ['',  [
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(10),
        Validators.pattern("^[0-9]*$"),
        ]
      ],
    })
  }

  form: FormGroup =  new FormGroup({
    name: new FormControl(''),
    password: new FormControl(''),
    code: new FormControl(''),
  })

  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }

  onSubmit(): void{
    this.submitted = true;
    if (this.form.invalid) {
      return;
    }
    console.log(JSON.stringify(this.form.value, null, 2));
  }

  @ViewChild("name") name: ElementRef;
  @ViewChild("password") password: ElementRef;
  @ViewChild("code") code: ElementRef;


  testAdmin(){
    if(this.name.nativeElement.value==="admin" &&
        this.password.nativeElement.value==="password" &&
        this.code.nativeElement.value==="123456"){
      console.log("asdadsasd");
      this.router.navigateByUrl('/admin');
      }
  }
}
