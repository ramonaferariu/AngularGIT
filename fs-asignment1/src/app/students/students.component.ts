import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit, Input,Output } from '@angular/core';
import { StudentsDataService } from '../students-data.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {

 //@Input() students:StudentsDataService[] = [];
 @Input() randomArray:StudentsDataService[] = [];
 

  constructor(private studentsService:StudentsDataService) {}

  ngOnInit(): void {
 
   }

   getPromoted(){
     return this.studentsService.promotedStudents();
   }

   getFailed(){
    return this.studentsService.failedStudents();
  }
  

  addRandom() {
 //   this.randomArray = this.studentsService.addRandom();
  }

  
}
