import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {

  constructor() { }
  students = [
    {
      firstname: 'rahul',
      lastname: 'reddy',
      age: 22,
      place: 'hyd'
    },
    {
      firstname: 'priya',
      lastname: 'jain',
      age: 32,
      place: 'pune'
    },
    {
      firstname: 'jyaram',
      lastname: 'naidu',
      age: 26,
      place: 'chennai'
    }
  ];
  ngOnInit(): void {
  }

}
