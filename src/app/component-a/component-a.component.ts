import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-component-a',
  templateUrl: './component-a.component.html',
  styleUrls: ['./component-a.component.css']
})
export class ComponentAComponent implements OnInit {
  
  var : any;
  data : any;

  constructor() {
    this.data ={sid:"", sname:"", department:"", city:""};
    this.var = 0;
   }
   display(students:any){
     this.var = 1;
     console.log(students);
     this.data = students;
   }

  ngOnInit(): void {
  }

}
