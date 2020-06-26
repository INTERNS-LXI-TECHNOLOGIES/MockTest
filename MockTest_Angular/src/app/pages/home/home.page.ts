import { Component, OnInit } from '@angular/core';
import { MockTestService } from '../../services/mock-test.service';
import{AuthService} from '../../services/auth.service';
import{Router,ActivatedRoute} from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { UsersService } from '../../services/users.service';
import { MocktestControllerResourceService } from 'src/app/api/services';


@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
 
  url:string='http://localhost:8080/api/mocktest-controller/';
  questions:any=this.mockTestSer.getDataFromServer('http://localhost:8080/api/questions/');
  // userRole=this.mockTestSer.getStringFromServer(this.url);

  public userInfo:object;
   userRole;
   activeExams;

//  registerId;
  constructor(private mockTestSer: MockTestService,private http: HttpClient,
    private route: ActivatedRoute,private userServ:UsersService,private auth:AuthService,private router:Router,
    private mockser:MocktestControllerResourceService) { }

  isAuthenticated(){
   if(this.auth.isLogin==true)
   {
    if(this.auth.data.role=='admin')
     this.userRole='admin';
     else
     this.userRole='user';
     console.log(this.userRole)
     return true;
   }
 }
 async logout() {
    
  if(this.auth.logout())
  {
    this.router.navigate(['login']);
  }

  }

  getActiveExams()
  {
    // this.userServ.getActiveExams();
    this.mockser.activeExamsUsingGET().subscribe(response => {
      this.activeExams=response;
      console.log(this.activeExams);
    });
  }

  startExam(id){
    this.router.navigate(['menu/exam-start/'+id]);
  }
 
  ngOnInit() {

    // this.isAuthenticated();
    this.auth.getUserInfo().then(userData => {
      console.log(userData);
      this.userInfo=userData;
      // this.id=userData.id;
     
    })
   
    this.getActiveExams();
  
  }

}
