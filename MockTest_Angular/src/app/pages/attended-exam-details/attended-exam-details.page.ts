import { Component, OnInit } from '@angular/core';
import { RouterModule,ActivatedRoute } from '@angular/router';
import { UsersService } from '../../services/users.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-attended-exam-details',
  templateUrl: './attended-exam-details.page.html',
  styleUrls: ['./attended-exam-details.page.scss'],
})
export class AttendedExamDetailsPage implements OnInit {

  constructor(private acivaterouter:ActivatedRoute,
    private userServ:UsersService,
    private router: Router) { }


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
  ngOnInit() {
    this.acivaterouter.params.subscribe(params => {
      const id= params['id']; //use this id to get  details..!
      this.attendedExamDetails(id);
    });

  }

}
