import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-studentdetails',
  templateUrl: './studentdetails.component.html',
  styleUrls: ['./studentdetails.component.css']
})
export class StudentdetailsComponent implements OnInit {

  constructor(public aR: ActivatedRoute) {}
  currentStudent:any;
  ngOnInit() {
    console.dir(this.aR);
    this.aR.queryParams.subscribe(details => {
      this.currentStudent = details;
    });
  }
}
