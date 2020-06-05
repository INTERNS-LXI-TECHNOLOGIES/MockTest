import { Component, OnInit } from '@angular/core';
import { RouterModule,ActivatedRoute } from '@angular/router';
import { UsersService } from '../../services/users.service';
@Component({
  selector: 'app-attended-exam-details',
  templateUrl: './attended-exam-details.page.html',
  styleUrls: ['./attended-exam-details.page.scss'],
})
export class AttendedExamDetailsPage implements OnInit {

  constructor(private acivaterouter:ActivatedRoute,private userServ:UsersService) { }
  attendedExamData
  attendedExamDetails(id)
  {
    this.userServ.getAllAttendedExamDetails(id).subscribe(data => {
      console.log(data);
      this.attendedExamData=data
     
     
    });
  }
  ngOnInit() {
    this.acivaterouter.params.subscribe(params => {
      const id= params['id']; //use this id to get  details..!
      this.attendedExamDetails(id);
    });

  }

}
