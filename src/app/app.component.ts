import { Component } from '@angular/core';
import { task } from './task';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  tasks:task[]=[
    {
      title:'veggies',
      status:false
    },
    {
      title:'car wash',
      status:true
    },
    {
      title:'recharge tv',
      status:true
    }
  ];
  newtask:task={title:'',status:false};
  editTaskIndex:number=-1;
  addTask(){
    this.tasks.push(this.newtask);
    this.newtask={title:'',status:false};
  }
  editTask(i:number){
    this.newtask = this.tasks[i];
    this.editTaskIndex = i;
  }
  doneTask(i:number){
    this.tasks[i].status=!this.tasks[i].status;
  }
  deleteTask(i:number){
    this.tasks.splice(i,1);
  }
  updateTask(){
    this.tasks[this.editTaskIndex] = this.newtask;
    this.editTaskIndex=-1;
    this.newtask={title:'',status:false};
  }
}
