import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentsDataService {

  constructor() { }

  students = [
    {fname:'John',lname:'Johnson',grade:4},
    {fname:'Jane',lname:'Ricky',grade:10},
    {fname:'Martin',lname:'Gray',grade:6},
    {fname:'Laura',lname:'Seawood',grade:3},
    {fname:'Mickey',lname:'Mouse',grade:8}
  ];


  randomArray = [0];

  
  promotedStudents() {
    return this.students.filter( x => x.grade >=5);
  }

  failedStudents(){
    return this.students.filter( x => x.grade < 5);
  }


  
  addRandom(){
    return this.randomArray.push(this.randomInteger(1,10));
   }

  randomInteger(min:number, max:number) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}
