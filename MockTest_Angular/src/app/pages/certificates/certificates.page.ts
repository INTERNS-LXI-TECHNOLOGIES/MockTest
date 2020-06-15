import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';
import {AuthService} from '../../services/auth.service';
@Component({
  selector: 'app-certificates',
  templateUrl: './certificates.page.html',
  styleUrls: ['./certificates.page.scss'],
})
export class CertificatesPage implements OnInit {
  login:String;
  constructor(private userServ:UsersService,private auth:AuthService) { }
  examData;
  pdfData;
  getPassedExams()
  {
    this.userServ.getPassedExams(this.login).subscribe(data => {
      console.log(data);
      this.examData=data;
      console.log(this.examData);
    });
  }
  generatePdfReport(id)
  {
      this.userServ.getPdfviewOfCertificate(id).subscribe(data => {
        this.pdfData=data
        console.log(this.pdfData);
       let file = new Blob([this.pdfData], { type: 'application/pdf' });            
          var fileURL = URL.createObjectURL(file);
          window.open(fileURL);
      },
     error => console.log(error)
      );
  
  }
  ngOnInit() {

    this.auth.getUserInfo().then(userData => {
      this.login=userData.name;
      this.getPassedExams();

    })
    
  }

}
