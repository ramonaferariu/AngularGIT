import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit, Input,Output } from '@angular/core';
import { StudentsDataService } from '../students-data.service';
import { Student } from '../student.model';
import { Observable,Subject } from 'rxjs';
@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {


 promoted:Student[] =[];
 failed:Student[] = [];
 
  constructor(private studentsService:StudentsDataService) {}

  ngOnInit(): void {

    this.promoted =  this.studentsService.promotedStudents();
    this.failed = this.studentsService.failedStudents();

    this.studentsService.studentsChanged.subscribe(
      (promoted:Student[]) => {
        this.promoted =  this.studentsService.promotedStudents();
        this.failed =  this.studentsService.failedStudents();
      }
    );
   }

  addRandom() {
    this.studentsService.addRandom();
  }

  
}
