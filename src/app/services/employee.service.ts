import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CosCenter } from '../models/cos-center.model';
import { Employee } from '../models/employee.model';
import { Manager } from '../models/manager.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  
  url1: string= 'http://localhost:8080/api/employee';

  constructor(private hhtp: HttpClient) { }

  getEmployee(): Observable<Employee[]>{
    return this.hhtp.get<Employee[]>(this.url1+'/listar');
  }

  getManager(): Observable<Manager[]>{
    return this.hhtp.get<Manager[]>(this.url1+'/managers');
  }

  getCosCenter(): Observable<CosCenter[]>{
    return this.hhtp.get<CosCenter[]>('http://localhost:8080/api/coscenter/listar');
  }

  createEmployee(employee: Employee): Observable<Employee>{
    return this.hhtp.post<Employee>(`${this.url1}/listar`,employee);
  }
}
