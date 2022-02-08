import { environment } from './../../environments/environment';
import { Node } from './../interface/node';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ParentNodeService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {} 
  
  getNodes(): Observable<Node[]> {
    return this.http.get<Node[]>(`${this.apiUrl}/parent`);
  }

  getNode(id: number): Observable<Node> {
    return this.http.get<Node>(`${this.apiUrl}/parent/${id}`);
  }

  createNode(node: Node): Observable<Node> {
    return this.http.post<Node>(`${this.apiUrl}/parent`, node);
  }

  updateNode(node: Node): Observable<Node> {
    return this.http.patch<Node>(`${this.apiUrl}/parent/${node.id}`, node);
  }

  patchNode(node: Node): Observable<Node> {
    return this.http.patch<Node>(`${this.apiUrl}/parent/${node.id}`, node);
  }

  deleteNode(id:number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/parent/${id}`);
  }

}
