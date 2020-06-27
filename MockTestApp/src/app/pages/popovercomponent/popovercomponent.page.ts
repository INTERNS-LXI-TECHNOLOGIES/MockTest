import { Component, OnInit } from '@angular/core';
// import { UsersService } from '../../services/users.service';
@Component({
  selector: 'app-popovercomponent',
  templateUrl: './popovercomponent.page.html',
  styleUrls: ['./popovercomponent.page.scss'],
})
export class PopovercomponentPage implements OnInit {
  pdfData;
  constructor( 
    // private userServ:UsersService
    ) { }

  ngOnInit() {
  }

  generatePdfReport()
  {
  
    // // pdfmake.vfs = pdfFonts.pdfMake.vfs;
    // const id=this.userServ.getPdfId();
    // // console.log("pop"+id);
    //   this.userServ.getPdfviewOfAttendedExamDetail(id).subscribe(data => {
    //     this.pdfData=data
    //     console.log(this.pdfData);
    //     // var UTF8_STR = new Uint8Array(this.data); // Convert to UTF-8... 
    //     // var BINARY_ARR = UTF8_STR.buffer; // Convert to buffer...
    //    // pdfmake.createPdf(this.data).open()
    //    let file = new Blob([data], { type: 'application/pdf' });            
    //       var fileURL = URL.createObjectURL(file);
    //       window.open(fileURL);
    //   },
    //  error => console.log(error)
    //   );
  
  }
}
