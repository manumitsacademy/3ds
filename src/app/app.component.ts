import { Component } from '@angular/core';
import { task } from './task';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  tasks:task[]=[];
  newtask:task={title:'',status:false};
  addTask(){
    this.tasks.push(this.newtask);
    this.newtask={title:'',status:false};
  }
  editTask(i:number){
    var newtitle = prompt("Enter the updated tasked");
    this.tasks[i].title=newtitle;    
  }
  doneTask(i:number){
    this.tasks[i].status=!this.tasks[i].status;
  }
  deleteTask(i:number){
    this.tasks.splice(i,1);
  }
}
