import { Component, OnInit } from '@angular/core';
import { RequirmentService } from '../requirment.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-get-candidate',
  templateUrl: './get-candidate.component.html',
  styleUrls: ['./get-candidate.component.css']
})
export class GetCandidateComponent implements OnInit {

  constructor(private requirmentservice:RequirmentService,private router:Router) { 
    this.getDataFromBd();
  }
  candidate:any[];
  ngOnInit() {
  }

  getDataFromBd() {
    this.requirmentservice.getCandidate().subscribe(data=>{
      console.log(data);
       this.candidate=data.candidate1;
       console.log(this.candidate);
     }, err => {
       console.log(err);
     } , () => {
       console.log('Got The data');
     })
  }
  //
  schedule(user){
    this.requirmentservice.selectedCandidate=user;
this.router.navigate(['./candidateScheduling']);
  }
}
