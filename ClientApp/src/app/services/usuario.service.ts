import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IUsuario } from '../models/usuario';

const baseUrl = 'http://localhost:5000/api/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<IUsuario[]> {
    return this.http.get<IUsuario[]>(baseUrl);
  }

  get(id): Observable<IUsuario> {
    return this.http.get<IUsuario>(`${baseUrl}/${id}`);
  }

  create(data): Observable<void> {
    return this.http.post<void>(baseUrl, data);
  }

  update(id, data): Observable<void> {
    return this.http.put<void>(`${baseUrl}/${id}`, data);
  }

  delete(id): Observable<void> {
    return this.http.delete<void>(`${baseUrl}/${id}`);
  }
}
