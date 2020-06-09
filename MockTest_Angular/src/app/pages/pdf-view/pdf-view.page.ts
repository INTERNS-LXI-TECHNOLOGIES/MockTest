import { Component, OnInit } from '@angular/core';
import { File } from '@ionic-native/file/ngx';
import * as pdfmake from 'pdfmake/build/pdfmake';
import * as pdfFonts from 'pdfmake/build/vfs_fonts';
@Component({
  selector: 'app-pdf-view',
  templateUrl: './pdf-view.page.html',
  styleUrls: ['./pdf-view.page.scss'],
})
export class PdfViewPage implements OnInit {

  constructor(public file:File) { }

  ngOnInit() {
  }

  generatePdf()
  {
    pdfmake.vfs = pdfFonts.pdfMake.vfs;
    var docDefinition = 
    {
      content: [{
                    columns: [
                                 
                                  [
                                    { text: 'BITCOIN', style: 'header' },
                                    { text: 'Cryptocurrency Payment System', style: 'sub_header' },
                                    { text: 'WEBSITE: https://bitcoin.org/', style: 'url' },
                                  ]
                              ]
                }],
                      styles: {   header: {bold: true,fontSize: 20,alignment: 'right'},
                                  sub_header: {fontSize: 18,alignment: 'right'},
                                  url: {fontSize: 16,alignment: 'right'}
                              },
                      pageSize: 'A4',pageOrientation: 'portrait'
      };

    pdfmake.createPdf(docDefinition).open();
  }
}
