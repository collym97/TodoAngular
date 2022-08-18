import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TodoAngular';
  tareas: string[] = [];
  name: string = '';
    
   addName() {
     this.tareas.push(this.name)
     this.name = '';
   }
  
  deleteName(index: number ) {
    this.tareas.splice(index,1)
  }
}
