import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MockTestService } from 'src/app/services/mock-test.service';
import { AttendedOption } from 'src/app/model/AttendedOption';

@Component({
  selector: 'app-user-exam',
  templateUrl: './user-exam.page.html',
  styleUrls: ['./user-exam.page.scss'],
})
export class UserExamPage implements OnInit {
  constructor(private acivaterouter:ActivatedRoute,private router:Router,
    private mockSer:MockTestService) { }
  examId;
  exam;

  get(){
    let arr = new Array<AttendedOption>(this.exam.count);
    arr.forEach(data=>{
      data.attendedAnswer=false;
      data.attendedOpt='';
    })
    return arr;
  }

  getExam(url:string,id)
  {
    this.mockSer.getDataById(url,id).subscribe(data => {
      this.exam=data;
      console.log(this.exam);
    });
  }

  attendedOptions:AttendedOption[]=this.get();

  ngOnInit() {
    this.acivaterouter.params.subscribe(params => {
      const id= params['id'];
      this.getExam('/exam/',id);
    });
  }


}
