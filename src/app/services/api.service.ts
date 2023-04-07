import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  api_url='http://localhost:8080';

  constructor(private _httpClient:HttpClient) { }


  get(url:string) {
    return this._httpClient.get(`${this.api_url}/${url}`)

   }


   post(url:string,body:any) {
     return this._httpClient.post(`${this.api_url}/${url}`,body)

    }

    put(url:string,body:any){
      return this._httpClient.put(`${this.api_url}/${url}`,body);
     }
  
    delete(url:string){
      return this._httpClient.delete(`${this.api_url}/${url}`);
     }
}
