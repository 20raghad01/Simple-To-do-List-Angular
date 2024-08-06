import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.css'
})
export class MainPageComponent {
  contentvar:string='';
  @Output() maincontent: EventEmitter<string> = new EventEmitter<string>();
  addtolist(){
    this.maincontent.emit(this.contentvar);
  }

}
