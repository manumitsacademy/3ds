import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentdetailsComponent } from './studentdetails/studentdetails.component';
import { StudentsComponent } from './students.component';

const routes: Routes = [
    { 
      path: '', 
      component: StudentsComponent ,
      children:[
        {
          path: 'studentdetails',
          component: StudentdetailsComponent
        }
      ]
    },
    

  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentsRoutingModule { }
