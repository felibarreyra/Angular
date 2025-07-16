import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Boot } from './boots-list/boot';
import { Observable, tap } from 'rxjs';
const URL = 'https://6877e8acdba809d901f15d70.mockapi.io/boots';

@Injectable({
  providedIn: 'root'
})

export class BootData {

  constructor(private http: HttpClient) { }

  public getAll(): Observable<Boot[]> {
    return this.http.get<Boot[]>(URL).pipe(
      tap((boots: Boot[]) => {
        boots.forEach(boot => {
          boot.quantity = 0;
        });
      })
    );
  }
  
  public deleteBoot(id: number | string): Observable<Boot []> {
    return this.http.delete<Boot[]>(`${URL}/${id}`);
  }
}

