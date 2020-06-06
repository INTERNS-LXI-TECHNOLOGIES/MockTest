import { Component, OnInit,ViewChild } from '@angular/core';
import { RouterModule,ActivatedRoute } from '@angular/router';
import { UsersService } from '../../services/users.service';
import { Router } from '@angular/router';
import { PopoverController } from '@ionic/angular';
import { MatTableDataSource } from '@angular/material/table';
import {MatPaginator} from  '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableModule} from '@angular/material/table'

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

  constructor(private acivaterouter:ActivatedRoute,
    private userServ:UsersService,
    private router: Router,
    public popoverController: PopoverController) { }


  
  attendedExamDetails(id)
  {
    this.userServ.getAllAttendedExamDetails(id).subscribe(data => {
      console.log(data);
      this.attendedExamData=data
     this.examlist=this.attendedExamData.attendList
     console.log(this.examlist);
    });
  }
  examHistory(examid,userid)
 {
  console.log("method call" +examid + userid);
  this.router.navigate(['/exam-history',examid]);
 
 }
//  async presentPopover(ev: any) {
//   const popover = await this.popoverController.create({
    
//     component: PopoverComponentComponent,
//     cssClass: 'my-custom-class',
//     event: ev,
//     translucent: true
//   });
//   console.log(ev);
//   return await popover.present();
// }

displayedColumns: string[] = ['sl.no', 'user', 'score', 'percentage','result','dateTime'];
// displayedColumns: string[] = ['score'];
dataSource = new MatTableDataSource<attendedExamDetails>(this.examlist);
@ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  ngAfterViewInit() { this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator; }


  ngOnInit() {
    this.acivaterouter.params.subscribe(params => {
      const id= params['id']; //use this id to get  details..!
      this.attendedExamDetails(id);
     
    });

  }
  

}
