import { Component, OnInit,ViewChild } from '@angular/core';
import { RouterModule,ActivatedRoute } from '@angular/router';
import { UsersService } from '../../services/users.service';
import { Router } from '@angular/router';
import { PopoverController } from '@ionic/angular';
import { MatTableDataSource } from '@angular/material/table';
import {MatPaginator} from  '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';


export interface attendedExamDetails
{
    userName:string;
    score:string;
    total:string;
    percentage:string;
    result:string;
    dateTime:string;
}

@Component({
  selector: 'app-attended-exam-details',
  templateUrl: './attended-exam-details.page.html',
  styleUrls: ['./attended-exam-details.page.scss'],
})
export class AttendedExamDetailsPage implements OnInit {


  examData:attendedExamDetails={
    
    userName:"",
    score : "",
    total:"",
    percentage:"" ,
    result:"",
    dateTime:"",
  }
  examlist: Array<attendedExamDetails>;
  attendedExamData;
  dataSource= null;
  isLoading = true;
  isEmpty=true;
 

  constructor(private acivaterouter:ActivatedRoute,
    private userServ:UsersService,
    private router: Router,
    public popoverController: PopoverController) { }


  
  attendedExamDetails(id)
  {
    this.userServ.getAllAttendedExamDetails(id).subscribe(data => {
      console.log(data);
      this.attendedExamData=data
      this.isLoading = false;
     this.examlist=this.attendedExamData.attendList
     if(this.examlist.length>0)
     {
      this.isEmpty=false;
     }
    this.dataSource = new MatTableDataSource<attendedExamDetails>(this.examlist);
   this.dataSource.sort = this.sort;
     console.log(this.dataSource);
    },
    error => this.isLoading = false
    );
  }
  examHistory(examid,userid)
 {
  console.log("method call" +examid + userid);
  this.router.navigate(['/exam-history',examid]);
 
 }


displayedColumns: string[] = [ 'index','userExtra.user.login', 'score', 'percentage','result','dateTime'];

@ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  // ngAfterViewInit() { this.dataSource.sort = this.sort;
  //   this.dataSource.paginator = this.paginator; }


  ngOnInit() {
    this.acivaterouter.params.subscribe(params => {
      const id= params['id']; //use this id to get  details..!
      this.attendedExamDetails(id);
     
    });

  }
  

}
