import { Injectable,RendererFactory2,Inject,Renderer2 } from '@angular/core';
import{DOCUMENT} from '@angular/common';
@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  renderer:Renderer2;

  constructor(private render:RendererFactory2,@Inject(DOCUMENT) private doc:Document) {
    this.renderer=this.render.createRenderer(null,null);
   }

   enableDark()
   {
     this.renderer.addClass(this.doc.body,'dark-theme');
   }
   enableLight()
   {
    this.renderer.removeClass(this.doc.body,'dark-theme');
   }
}
