import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { CreateExamPage } from '../create-exam/create-exam.page';  

@Component({
  selector: 'app-exam',
  templateUrl: './exam.page.html',
  styleUrls: ['./exam.page.scss'],
})
export class ExamPage implements OnInit {
  examData;
  constructor(private userServ:UsersService,private router: Router,private modalController:ModalController) { }
  getAllExam() {
    this.userServ.getAllExams().subscribe(data => {
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
