import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CosCenter } from '../models/cos-center.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CosCenterService {

  url: string= 'http://localhost:8080/api/coscenter';

  constructor(private hhtp: HttpClient) { }

  getCosCenter(): Observable<CosCenter[]>{
    return this.hhtp.get<CosCenter[]>(`${this.url}/listar`);
  }
}
