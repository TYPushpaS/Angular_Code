import { Component, OnInit } from '@angular/core';
import { RequirmentService } from '../requirment.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-requirmentschedule',
  templateUrl: './requirmentschedule.component.html',
  styleUrls: ['./requirmentschedule.component.css']
})
export class RequirmentscheduleComponent implements OnInit {

  constructor(private RequirmentService: RequirmentService, private router: Router) { }

  ngOnInit() {
  }
  addreqschedule(reqform: NgForm) {
    console.log(reqform.value);
    let formData = {
      requirment: {
        requirmentId: reqform.value.requirmentId,
        client: reqform.value.client,
        technology: reqform.value.technology,
        yearOfExperience: reqform.value.yearOfExperience,
        location: reqform.value.location,
        numberOfPosition: reqform.value.numberOfPosition,
        opendate: reqform.value.opendate,
        closedate: reqform.value.closedate,
        role: reqform.value.role,
        rate: reqform.value.rate,
        contact: reqform.value.contact,
        jobDiscription: reqform.value.jobDiscription
      },
      createdDate: reqform.value.createdDate,
      interviewlocation: reqform.value.interviewlocation,
      interviewtype: reqform.value.interviewtype,
      skills: reqform.value.skills,
      status: reqform.value.status,
      remarks: reqform.value.remarks,
      interviewer: reqform.value.interviewer,
      hrName:reqform.value.hrName,
      requirmentId:reqform.value.requirmentId
      
    }
    console.log(formData);
    this.RequirmentService.addInterview(formData).subscribe(res => {
      console.log('Interview scheduled  successfully');
      alert('Interview scheduled  successfully...!')
      this.router.navigateByUrl("getInterview");
      reqform.reset();
    }, err => {
      console.log('Interview scheduling failed');
    });
  }
}
