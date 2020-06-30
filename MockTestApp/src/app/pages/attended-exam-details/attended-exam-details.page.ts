import { Component, OnInit,ViewChild } from '@angular/core';
import { RouterModule,ActivatedRoute, Router } from '@angular/router';
import { PopoverController } from '@ionic/angular';
import { MatTableDataSource } from '@angular/material/table';
import {MatPaginator} from  '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import { PopovercomponentPage } from '../popovercomponent/popovercomponent.page';  
import {MocktestControllerResourceService} from 'src/app/services/services';
import {AttendedExamListModel} from '../../services/models/attended-exam-list-model';


@Component({
  selector: 'app-attended-exam-details',
  templateUrl: './attended-exam-details.page.html',
  styleUrls: ['./attended-exam-details.page.scss'],
})

export class AttendedExamDetailsPage implements OnInit {
 

  
  
  examlist;
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
        
          this.dataSource = new MatTableDataSource<AttendedExamListModel>(this.examlist);
          this.dataSource.sort = this.sort;
          this.dataSource.paginator = this.paginator;
          console.log(this.dataSource);
          console.log(this.dataSource.sort);
          console.log(this.dataSource.paginator);
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
      console.log("page open");
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
    this.mockController.setPdfId(id);   
    await popover.present();
  }

}
