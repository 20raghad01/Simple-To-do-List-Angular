import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  @Input() arrayfromapp: string[] = []; 
  deleteItem(index:number){
    this.arrayfromapp.splice(index,1)
  }

}
