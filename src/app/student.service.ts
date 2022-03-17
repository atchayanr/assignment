import { Student } from './student';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  public getStudents(){
    let students: Student[];
    students = [
      new Student(101, "Atchaya", "CSE", "Puducherry"),
      new Student(102, "Kavitha", "IT", "Chennai"),
      new Student(103, "Mohan", "CSE", "Puducherry"),
      new Student(104, "Raj", "MECH", "Coimbatore"),
      new Student(105, "Swetha", "ECE", "Coimbatore"),
    ];
    return students;
  }

  constructor() { }
}
