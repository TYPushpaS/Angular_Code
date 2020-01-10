import { Component, OnInit } from '@angular/core';
import { RequirmentService } from '../requirment.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-candidate-scheduling',
  templateUrl: './candidate-scheduling.component.html',
  styleUrls: ['./candidate-scheduling.component.css']
})
export class CandidateSchedulingComponent implements OnInit {

  constructor(private requirmentservice:RequirmentService,private router:Router) { }

  ngOnInit() {
  }
  addinterview(schedulingform){
    console.log("form data",schedulingform.value);
    this.requirmentservice.addInterview(schedulingform.value).subscribe(res => {
      console.log('Interview scheduled  successfully');
      alert('Interview scheduled  successfully...!')
      this.router.navigateByUrl("getInterview");
      schedulingform.reset();
   }, err => {
      console.log('Interview scheduling failed');
   });
  }
}
