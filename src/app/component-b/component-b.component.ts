
import { Component, OnInit } from '@angular/core';
import { EventEmitter,Output } from '@angular/core';
import { Student } from '../student';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-component-b',
  templateUrl: './component-b.component.html',
  styleUrls: ['./component-b.component.css']
})
export class ComponentBComponent implements OnInit {
  student: Student[];
  @Output() callToParent = new EventEmitter();
  constructor(private students:StudentService) { 
    this.student = this.students.getStudents();
  }
  callParent(){
    console.log(this.student);
    this.callToParent.emit(this.student);
  }

  
  ngOnInit(): void {
  }

}
