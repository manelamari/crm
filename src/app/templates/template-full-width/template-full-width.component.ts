import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-template-full-width',
  templateUrl: './template-full-width.component.html',
  styleUrl: './template-full-width.component.scss'
})
export class TemplateFullWidthComponent {
  @Input()title!:string;
// constructor(){
//   console.log('Title:constructor', this.title);
// }
// ngOnChanges(){
// console.log('Title:OnChanges', this.title);
// }
// ngOnInit(){
// console.log('Title:OnInit', this.title);
// }

}
new TemplateFullWidthComponent;
