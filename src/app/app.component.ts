import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component';
import { Tasks } from './interfaces/tasks';
import { ListComponent } from './list/list.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,MainPageComponent ,ListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ng2-2';
  tasksList:Array<string>=[];
  addingToArray(contentval:string){
    this.tasksList.push(contentval);
    console.log(this.tasksList[1]);
  }
}
