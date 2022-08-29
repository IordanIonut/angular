import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from '../models/employee.model';
import { Manager } from '../models/manager.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  url: string= 'http://localhost:8080/api/employee';

  constructor(private hhtp: HttpClient) { }

  getEmployee(): Observable<Employee[]>{
    return this.hhtp.get<Employee[]>(this.url+'/listar');
  }

  getManager(): Observable<Manager[]>{
    return this.hhtp.get<Manager[]>(this.url+'/managers');
  }

  createEmployee(employee: Employee): Observable<Employee>{
    return this.hhtp.post<Employee>(this.url+'/createEmployee',employee);
  }
}
