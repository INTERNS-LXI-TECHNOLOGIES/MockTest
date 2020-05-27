import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MockTestService {

  getStringFromServer(url:string):Observable<string>{
   return this.http.get(url,{responseType: 'text'}).pipe(map(str => {
      console.log('data from server for url'+url+' is ::'+str);
      return str;}));
  }

  getDataFromServer(url:string){
    return this.http.get(url).pipe(map(data => {
      console.log('string from server for url'+url+' is ::'+data);
        return data;}));
  }

  constructor(private http:HttpClient) { }
}
