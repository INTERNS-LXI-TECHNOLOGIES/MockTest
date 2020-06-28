import { Component, OnInit,ViewChild } from '@angular/core';
import { RouterModule,ActivatedRoute, Router } from '@angular/router';

import { PopoverController } from '@ionic/angular';
import { MatTableDataSource } from '@angular/material/table';
import {MatPaginator} from  '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import { PopovercomponentPage } from '../popovercomponent/popovercomponent.page';  
import { MocktestControllerResourceService } from 'src/app/services/services';



export interface attendedExamDetails
{
     user:{
        login:String;
        id;
    }
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
    
    user:{
      id:"",
      login:""},
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
  //isEmpty=true;
 
  displayedColumns: string[] = [ 'index','user', 'score', 'percentage','result','dateTime'];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private acivaterouter:ActivatedRoute,
    private router: Router,
    private mockController:MocktestControllerResourceService,
    public popoverController: PopoverController) { }

  attendedExamDetails(id)
  {
    this.mockController.getAllAttendedExamDetailsUsingGET(id).subscribe(data => {
          console.log(data);
          this.attendedExamData=data
          this.isLoading = false;
          this.examlist=this.attendedExamData.attendList
        console.log(this.examlist);
        
          this.dataSource = new MatTableDataSource<attendedExamDetails>(this.examlist);
          this.dataSource.sort = this.sort;
          this.dataSource.paginator = this.paginator;
          console.log(this.dataSource);
          },
          error => this.isLoading = false
          );
  }
  examHistory(examid,userid)
 {
  console.log("method call" +examid + userid);
  this.router.navigate(['menu/exam-history',examid]);
 }

  ngOnInit() {
    this.acivaterouter.params.subscribe(params => {
      const id= params['id']; //use this id to get  details..!
      this.attendedExamDetails(id);
     
    });

  }
  
  async presentPopover(ev: any,id) {
    console.log("id"+id);
    const popover = await this.popoverController.create({
      component:PopovercomponentPage,
      event: ev,
      translucent: false
    });
  // this.userServ.setPdfId(id);        ========================
    await popover.present();
  }

}
