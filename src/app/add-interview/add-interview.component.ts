import { Component, OnInit } from '@angular/core';
import { RequirmentService } from '../requirment.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-interview',
  templateUrl: './add-interview.component.html',
  styleUrls: ['./add-interview.component.css']
})
export class AddInterviewComponent implements OnInit {

  constructor(private requirmentservice: RequirmentService, private router:Router) { }

  ngOnInit() {
  }
  addInterview(scheduleinterview){
    this.requirmentservice.addInterview(scheduleinterview.value).subscribe(res => {
      console.log('Interview scheduled  successfully');
      alert('Interview scheduled  successfully...!')
      this.router.navigateByUrl("getInterview");
      scheduleinterview.reset();
   }, err => {
      console.log('Interview scheduling failed');
   });
  }
}
