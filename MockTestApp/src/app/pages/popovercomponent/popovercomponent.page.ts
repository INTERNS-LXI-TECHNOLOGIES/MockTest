import { Component, OnInit } from '@angular/core';
import {MocktestControllerResourceService} from 'src/app/services/services';
@Component({
  selector: 'app-popovercomponent',
  templateUrl: './popovercomponent.page.html',
  styleUrls: ['./popovercomponent.page.scss'],
})
export class PopovercomponentPage implements OnInit {
  pdfData;
  constructor( 
    private mockController:MocktestControllerResourceService
    ) { }

  ngOnInit() {
  }

  generatePdfReport()
  { 
    const id=this.mockController.getPdfId();
    console.log("pdf open"+id);
      this.mockController.getReportAsPdfUsingDataBaseUsingGET(id).subscribe(data => {
        this.pdfData=data
        console.log(this.pdfData);
   
       let file = new Blob([data], { type: 'application/pdf' });            
          var fileURL = URL.createObjectURL(file);
          window.open(fileURL);
      },
     error => console.log(error)
      );
  
  }
}
