import { Component, OnInit } from '@angular/core';
import { RequirmentService } from '../requirment.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-candidate-creation',
  templateUrl: './candidate-creation.component.html',
  styleUrls: ['./candidate-creation.component.css']
})
export class CandidateCreationComponent implements OnInit {

 interviewId:number;
  constructor(private requirmentservice: RequirmentService, private router:Router) {
       

   }

  ngOnInit() {
  }
  addCandidate(candidateInfo){
    this.requirmentservice.addCandidate(candidateInfo.value).subscribe(res => {
      console.log('candidate added successfully');
      alert('candidate Added Successfully...!')
      this.router.navigateByUrl("getCandidate");
      candidateInfo.reset();
   }, err => {
      console.log('candidate is  not added');
   });
  }
}
