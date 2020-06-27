import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { CreateExamPage } from '../create-exam/create-exam.page';  
import { MocktestControllerResourceService } from 'src/app/services/services';

@Component({
  selector: 'app-exam',
  templateUrl: './exam.page.html',
  styleUrls: ['./exam.page.scss'],
})
export class ExamPage implements OnInit {
  examData;
  
  constructor(private mockController:MocktestControllerResourceService,
    private router: Router,private modalController:ModalController) { }

  getAllExam() {
    this.mockController.getAllExamDetailsUsingGET().subscribe(data => {
      console.log(data);
      this.examData=data    
    });
   }
   examDetaills(id)
   {
     console.log(id);
     this.router.navigate(['menu/exam-details',id]);
   }
  ngOnInit() {
    this.getAllExam();
   
  }
  doRefresh(event)
  {
        this.getAllExam();
        setTimeout(() => {
          console.log('Async operation has ended');
          event.target.complete();
        }, 2000);
    }

//  deleteExam()
//  {
//   event.stopImmediatePropagation();
//    console.log("click on delete");
  //  public deleteUser(id: string){
  //   event.stopImmediatePropagation();
  //   this.appservice.deleteUser(id);
  //   setTimeout(() => {
  //     this.users = this.appservice.getUsers('http://localhost:8080/api/users/');
  //   }, 2000);
  // }
 //}


async presentModal() {
  console.log("clicked ")
  const modal = await this.modalController.create({
  component: CreateExamPage,
  swipeToClose: true,
  componentProps: { value: 123 }
  });

  await modal.present();

}
}
