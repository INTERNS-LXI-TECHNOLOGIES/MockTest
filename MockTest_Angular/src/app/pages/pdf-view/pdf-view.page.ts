import { Component, OnInit } from '@angular/core';
import { File } from '@ionic-native/file/ngx';
import { RouterModule,ActivatedRoute } from '@angular/router';
import * as pdfmake from 'pdfmake/build/pdfmake';
import * as pdfFonts from 'pdfmake/build/vfs_fonts';
import { ToastController } from '@ionic/angular';
import { UsersService } from '../../services/users.service';
@Component({
  selector: 'app-pdf-view',
  templateUrl: './pdf-view.page.html',
  styleUrls: ['./pdf-view.page.scss'],
})
export class PdfViewPage implements OnInit {

  constructor(public file:File,private toastCtrl:ToastController, private userServ:UsersService,private acivaterouter:ActivatedRoute) { }
  data;
  ngOnInit() {
    this.acivaterouter.params.subscribe(params => {
      const id= params['id']; //use this id to get  details..!
      this. pdfView(id);
     
    });
  }


  // generatePdf()
  // {
  //   let self = this;
  //   pdfmake.vfs = pdfFonts.pdfMake.vfs;
  //   var docDefinition = {content: [{columns: [
  //     [
  //       { text: 'BITCOIN', style: 'header' },
  //       { text: 'Cryptocurrency Payment System', style: 'sub_header' },
  //       { text: 'WEBSITE: https://bitcoin.org/', style: 'url' },
  //     ]
  //   ]
  // }],
  // styles: {header: {bold: true,fontSize: 20,alignment: 'right'},
  // sub_header: {fontSize: 18,alignment: 'right'},
  // url: {fontSize: 16,alignment: 'right'}},
  // pageSize: 'A4',pageOrientation: 'portrait'};
  // pdfmake.createPdf(docDefinition).getBuffer(function (buffer) {
  //   let utf8 = new Uint8Array(buffer);
  //   let binaryArray = utf8.buffer;
  //   self.saveToDevice(binaryArray,"Bitcoin.pdf")});
  // }
  // async saveToDevice(data:any,savefile:any){
  //   let self = this;self.file.writeFile(self.file.externalDataDirectory, savefile, data, {replace:false});
  //   const toast =await self.toastCtrl.create({message: 'File saved to your device',duration: 3000,position: 'top'});
  //   toast.present();
  // }
  pdfView(id)
  {
  // pdfmake.vfs = pdfFonts.pdfMake.vfs;
    this.userServ.getPdfviewOfAttendedExamDetail(id).subscribe(data => {
      
      this.data=data
      console.log(this.data);
      // var UTF8_STR = new Uint8Array(this.data); // Convert to UTF-8... 
    	// var BINARY_ARR = UTF8_STR.buffer; // Convert to buffer...
      pdfmake.createPdf(this.data).open()
    let file = new Blob([data], { type: 'application/pdf' });            
        var fileURL = URL.createObjectURL(file);
        window.open(fileURL);
      
        
      
    },
   // error => console.log(this.data)
    );
}
}
