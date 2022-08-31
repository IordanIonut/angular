import { Component, OnInit } from '@angular/core'
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms'
import { Title, Meta } from '@angular/platform-browser'
import { CosCenter } from 'src/app/models/cos-center.model'
import { Employee } from 'src/app/models/employee.model'
import { Manager } from 'src/app/models/manager.model'
import { CosCenterService } from 'src/app/services/cos-center.service'
import { EmployeeService } from 'src/app/services/employee.service'

@Component({
  selector: 'app-register',
  templateUrl: 'register.component.html',
  styleUrls: ['register.component.css'],
})
export class Register  implements OnInit{
  raw6155: string = ' ';
  rawiu6l: string = ' ';

  submitted = false;
  
  employee: Employee = new Employee();

  cos_centers: CosCenter[] = [];

  managers: Manager[] = [];

  constructor(private employeeService: EmployeeService, 
    private cosSenterService: CosCenterService,
    private formBuilder: FormBuilder){
  }

  ngOnInit(): void {
    this.employeeService.getEmployee().subscribe(response => 
      console.log(response));//consola
    this.employeeService.getManager().subscribe(response => 
        console.log(response));//consola
    this.employeeService.getManager().subscribe(response => 
        this.managers = response)//html
    this.cosSenterService.getCosCenter().subscribe(response => 
        this.cos_centers = response)//html
    this.cosSenterService.getCosCenter().subscribe(response => 
        console.log(response));//consola
    this.form = this.formBuilder.group({
      name: ['', [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(20),
      ]
    ],
      cos_center: ['', Validators.required],
      manager: ['', Validators.required],
      nr_of_phone: ['',  [
        Validators.required,
        Validators.minLength(10),
        Validators.maxLength(10),
        Validators.pattern("^[0-9]*$"),
        ]
      ],
      password: ['', [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(15),
      ]
    ],
      email: ['', [
        Validators.required,
        Validators.email
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
  
//select
  get cosCenter() {
    return this.form.get('cos_center');
  }
  
  changeCosCenter(e) {
    this.cosCenter.setValue(e.target.value, {
      onlySelf: true
    })
  }

  get ManagerVal() {
    return this.form.get('manager');
  }
  
  changeManager(e) {
    this.ManagerVal.setValue(e.target.value, {
      onlySelf: true
    })
  }
  //select 

  form: FormGroup =  new FormGroup({
    name: new FormControl(''),
    cos_center: new FormControl(''),
    manager: new FormControl(''),
    nr_of_phone: new FormControl(''),
    password: new FormControl(''),
    email: new FormControl(''),
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

  createEmployee(){
    console.log(this.employee);
    this.employeeService.createEmployee(this.employee).subscribe(data =>
      console.log("CREATE!!"));
  }

}