import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { task } from '../task';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() task:task={title:'',status:false};
  @Input() i:number=-1;


  @Output() edit=new EventEmitter();
  @Output() done=new EventEmitter();
  @Output() del=new EventEmitter();
  
  editTask(i:number){
    this.edit.emit(i.toString());
  }
  doneTask(i:number){
    this.done.emit(i.toString());
  }
  deleteTask(i:number){
    this.del.emit(i.toString());
  }
}
