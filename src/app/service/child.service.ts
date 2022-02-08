import { Children } from './../interface/children';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ChildService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {} 
  
  getNode(id: number): Observable<Children> {
    return this.http.get<Children>(`${this.apiUrl}/child/${id}`);
  }

  createNode(children: Children): Observable<Children> {
    return this.http.post<Children>(`${this.apiUrl}/child`, children);
  }

  updateNode(children: Children): Observable<Children> {
    return this.http.patch<Children>(`${this.apiUrl}/child/${children.id}`, children);
  }

  patchNode(children: Children): Observable<Children> {
    return this.http.patch<Children>(`${this.apiUrl}/child/${children.id}`, children);
  }

  deleteNode(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/child/${id}`);
  }

}
