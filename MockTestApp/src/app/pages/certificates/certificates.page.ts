import { Component, OnInit } from '@angular/core';
import { AccountResourceService, MocktestControllerResourceService } from 'src/app/services/services';
@Component({
  selector: 'app-certificates',
  templateUrl: './certificates.page.html',
  styleUrls: ['./certificates.page.scss'],
})
export class CertificatesPage implements OnInit {
  userDto;
  constructor(private mockController:MocktestControllerResourceService,
    private accRes:AccountResourceService) { }
  examData;
  pdfData;
  getPassedExams()
  {
    this.mockController.userPassedDetailsUsingGET(this.userDto.login).subscribe(data => {
      console.log(data);
      this.examData=data;
      console.log(this.examData);
    });
  }
  generatePdfReport(id)
  {
    this.mockController.getPdfUsingGET(id).subscribe(data => {
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
    this.accRes.getAccountUsingGET().subscribe(userData => {
      this.userDto=userData;
      this.getPassedExams();

    })
    
  }

}
