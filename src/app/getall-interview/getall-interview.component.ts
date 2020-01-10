import { Component, OnInit } from '@angular/core';
import { RequirmentService } from '../requirment.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-getall-interview',
  templateUrl: './getall-interview.component.html',
  styleUrls: ['./getall-interview.component.css']
})
export class GetallInterviewComponent implements OnInit {

  constructor(private requirmentservice:RequirmentService,private router:Router) {
    this.getInterviewDataFromBd();
   }
interview:any;
  ngOnInit() {
  }
  getInterviewDataFromBd() {
    this.requirmentservice.getInterview().subscribe(data=>{
      console.log(data);
       this.interview=data.interview1;
       console.log(this.interview);
     }, err => {
       console.log(err);
     } , () => {
       console.log('Got The data');
     })
  }

  addcandidate(user){
    this.requirmentservice.selectedInterview=user;
    this.router.navigateByUrl("/createInterview");
  }

}
