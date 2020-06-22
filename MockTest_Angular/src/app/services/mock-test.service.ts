import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { ifStmt } from '@angular/compiler/src/output/output_ast';
import {AlertController} from '@ionic/angular';
import{AuthService} from '../services/auth.service';

export interface QstnOption{
  option: string;
  isAnswer: boolean;
}
export interface Question {
  qstn: string;
  level: string;
  qstnOptions: Array<QstnOption>;
}

@Injectable({
  providedIn: 'root'
})
export class MockTestService {

  constructor(private http:HttpClient,private router:Router,private alertController: AlertController,private authService:AuthService) { }
  defUrl='http://localhost:8080/api/mocktest-controller';
  alertMessage(message:string)
  {
    if(message!=null)
      alert(message);
    else
      alert('something went wrong');
  }
  async presentAlert(msg:string) {
    const alert = await this.alertController.create({
      message:  msg,
      buttons: ['OK']
    });
  
    await alert.present();
  }

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

  postQstnToServer(url:string,data:Question){
    console.log('post data  for url'+this.defUrl+url+' is ::'+data);
    this.http.post(this.defUrl+url,data).subscribe(()=>{
    this.presentAlert('successfully created question');
    this.router.navigateByUrl('menu/question');}
  );
  }

  getDataById(url:string,id)
  {
    return this.http.get(this.defUrl+url+id);
  }

 
}
