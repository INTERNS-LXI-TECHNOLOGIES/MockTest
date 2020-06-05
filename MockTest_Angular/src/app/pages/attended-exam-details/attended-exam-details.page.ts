import { Component, OnInit } from '@angular/core';
import { RouterModule,ActivatedRoute } from '@angular/router';
import { UsersService } from '../../services/users.service';
import { Router } from '@angular/router';
import { PopoverController } from '@ionic/angular';
import { CreateQuestionPage } from '../create-question/create-question.page';



@Component({
  selector: 'app-attended-exam-details',
  templateUrl: './attended-exam-details.page.html',
  styleUrls: ['./attended-exam-details.page.scss'],
})
export class AttendedExamDetailsPage implements OnInit {

  constructor(private acivaterouter:ActivatedRoute,
    private userServ:UsersService,
    private router: Router,
    public popoverController: PopoverController) { }


  attendedExamData
  attendedExamDetails(id)
  {
    this.userServ.getAllAttendedExamDetails(id).subscribe(data => {
      console.log(data);
      this.attendedExamData=data
     
     
    });
  }
  examHistory(examid,userid)
 {
  console.log("method call" +examid + userid);
  this.router.navigate(['/exam-history',examid]);
 
 }
 async presentPopover(ev: any) {
  const popover = await this.popoverController.create({
    
    component: CreateQuestionPage,
    cssClass: 'my-custom-class',
    event: ev,
    translucent: true
  });
  console.log("dsdsdsd");
  return await popover.present();
}
  ngOnInit() {
    this.acivaterouter.params.subscribe(params => {
      const id= params['id']; //use this id to get  details..!
      this.attendedExamDetails(id);
    });

  }

}
