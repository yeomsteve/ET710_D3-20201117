import { Component, OnInit } from '@angular/core';
import { r1 } from '../products';

@Component({
  selector: 'app-myresume',
  templateUrl: './myresume.component.html',
  styleUrls: ['./myresume.component.css']
})
export class MyresumeComponent implements OnInit {
 profile = r1.profile;
 workExpeience = r1.workExperience ;
 education = r1.education ;
  constructor() { }

  ngOnInit() {
  }

}