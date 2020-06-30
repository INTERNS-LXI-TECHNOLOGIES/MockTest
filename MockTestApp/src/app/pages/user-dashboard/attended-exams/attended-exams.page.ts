import { Component, OnInit,ViewChild ,ChangeDetectorRef} from '@angular/core';
import { Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';
import {MatPaginator} from  '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {AccountResourceService ,MocktestControllerResourceService} from 'src/app/services/services';

import{UserDashBoard} from 'src/app/services/models';
import{AttendedExamModel} from 'src/app/services/models';

@Component({
  selector: 'app-attended-exams',
  templateUrl: './attended-exams.page.html',
  styleUrls: ['./attended-exams.page.scss'],
})

export class AttendedExamsPage implements OnInit {
  
username:string;
 data:object;

 examlist: Array<AttendedExamModel>;
 dataSource= null;
 isLoading = true;
 isEmpty=true;

 displayedColumns: string[] = [ 'index','examName', 'score', 'percentage','result','dateTime'];

 @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  examData:AttendedExamModel;
 
  dashboardData:UserDashBoard;
  constructor(
    private mockController:MocktestControllerResourceService,
    private router: Router, private accRes:AccountResourceService,private cdr: ChangeDetectorRef
    ) {}
 
 
  attendedExams(login)
  {

    this.mockController.userDashboardUsingGET(login).subscribe(data => {
      console.log(data);
      this.dashboardData=data
      this.examlist=this.dashboardData.attendedExamList;
      console.log(this.examlist); 
      this.isLoading = false;
    if(this.examlist.length>0)
     {
      this.isEmpty=false;
     }
    this.dataSource = new MatTableDataSource<AttendedExamModel>(this.examlist);
    this.cdr.detectChanges();
   this.dataSource.sort = this.sort;
   this.dataSource.paginator = this.paginator;
     console.log(this.dataSource);
     console.log(this.dataSource.sort);
     console.log(this.dataSource.paginator);
    },
    error => this.isLoading = false
    );
  }

  ngOnInit() {
    this.accRes.getAccountUsingGET().subscribe(u=>{
      const user=u;
      console.log(user);
      this.username=user?.login;
      console.log(this.username);
      this.attendedExams(this.username);
    })
     
  }
  
 examHistory(id)
 {
  console.log("method call" +id);
  this.router.navigate(['menu/exam-history',id]);
 
 }
}


