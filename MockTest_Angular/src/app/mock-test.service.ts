import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

export interface QstnOption{
  option: string;
  isAnswer: boolean;
}
export interface Question {
  qstn: string;
  level: string;
  options: Array<QstnOption>;
}

@Injectable({
  providedIn: 'root'
})
export class MockTestService {

  defUrl='http://localhost:8080/api/mocktest-controller';
  
  getStringFromServer(url:string):Observable<string>{
   return this.http.get(this.defUrl+url,{responseType: 'text'}).pipe(map(str => {
      console.log('data from server for url'+this.defUrl+url+' is ::'+str);
      return str;}));
  }

  getDataFromServer(url:string){
    return this.http.get(this.defUrl+url).pipe(map(data => {
      console.log('string from server for url'+this.defUrl+url+' is ::'+data);
        return data;}));
  }

  postDataToServer(url:string,data){
    return this.http.post(this.defUrl+url,data);
  }
  constructor(private http:HttpClient) { }
}
