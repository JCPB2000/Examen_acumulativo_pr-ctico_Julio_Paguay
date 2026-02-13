import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private apiUrl = 'http://localhost:3000/api/tareas';

  constructor(private http: HttpClient) {}

  obtenerTareas(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  crearTarea(task: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, task);
  }
}
