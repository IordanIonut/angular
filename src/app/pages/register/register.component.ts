import { Component, OnInit } from '@angular/core'
import { Title, Meta } from '@angular/platform-browser'
import { Employee } from 'src/app/models/employee.model'
import { Manager } from 'src/app/models/manager.model'
import { EmployeeService } from 'src/app/services/employee.service'

@Component({
  selector: 'app-register',
  templateUrl: 'register.component.html',
  styleUrls: ['register.component.css'],
})
export class Register implements OnInit {
  raw6155: string = ' ';
  rawiu6l: string = ' ';

  employee: Employee = new Employee();

  managers: Manager[] = [];

  constructor(private employeeService: EmployeeService){

  }
  ngOnInit(): void {
    this.employeeService.getEmployee().subscribe(response => 
      console.log(response));//consola
    this.employeeService.getManager().subscribe(response => 
        console.log(response));//consola
    this.employeeService.getManager().subscribe(response => 
        this.managers = response)//html
  }

  createEmployee(){
    console.log(this.employee);
    this.employeeService.createEmployee(this.employee).subscribe(data =>
      console.log("EXIT!!"));
  }
}
