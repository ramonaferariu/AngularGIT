import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Student } from './student.model';

@Injectable({
  providedIn: 'root'
})
export class StudentsDataService {

  constructor() { }

  students:Student[] = [
    new Student('John','John',5),
    new Student('Jane','Ricky',3),
    new Student('Martin','Gray',10),
    new Student('Martin','Seawood',8),
    new Student('Laura','Seawood',6)
  ];
  studentsChanged = new Subject<Student[]>();

  randomArray = [0];
  randomFnames = ["Jimmy","Ben","Carla","Elena","Victor"];
  randomLnames = ["Wood","Wilson ","Brown ","Smith","Taylor"];
  
  addRandom(){
   let fname =  this.randomFnames[Math.floor(Math.random() * this.randomFnames.length)];
   let lname =  this.randomLnames[Math.floor(Math.random() * this.randomLnames.length)]
   this.students.push( new Student(fname,lname,this.randomInteger(1,6)));
   this.studentsChanged.next(this.students.slice());
   }

  promotedStudents() {
    return this.students.filter( x => x.grade >=5);
  }

  failedStudents(){
    return this.students.filter( x => x.grade < 5);
  }

  randomInteger(min:number, max:number) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}
