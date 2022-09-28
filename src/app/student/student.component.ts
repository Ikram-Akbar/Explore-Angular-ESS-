import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  // Student Information 
  studentName: string;
  age: number;
  school: string;

  updateStudentName(e: Event) {
   
    this.studentName = (<HTMLInputElement>e.target).value;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
