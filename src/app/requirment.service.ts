import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const headeroption = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class RequirmentService {
  url:string= 'http://localhost:8082/talenthunt';
  selectedRequirment:any={
    requirmentId:null,
    client:null,
    technology:null,
    yearOfExperience:null,
    location:null,
    numberOfPosition:null,
    opendate:null,
    closedate:null,
    role:null,
    rate:null,
    contact:null,
    jobDiscription:null,
    uname:null,
    time:null
  }

  selectedCandidate:any={
    candidateId:null,
    candidateName:null,
    email:null,
    phoneNumber:null,
    govtId:null,
    relocate:null,
    candidateType:null,
    yearOfPassing:null,
    percentage:null,
    currentDesignation:null,
    yearOfExperience:null,
    noticePeriod:null,
    currentCTC:null,
    expectedCTC:null,
    interviewId:null
  }


  selectedInterview:any={
    interviewId:null,
    createdDate:null,
    interviewlocation:null,
    interviewtype:null,
    skills:null,
    status:null,
    remarks:null,
    interviewer:null,
    hrName:null,
    requirmentId:null
    
  }
  constructor(private http: HttpClient) { }

  addRequirment(data) {
    return this.http.post(`${this.url}/addrequirement`, data, headeroption );
  }

  updateRequirment(data){
    return this.http.put(`${this.url}/update`,data,headeroption);
  }

  getRequirment(){
    return this.http.get<any>(`${this.url}/get-all`,headeroption);
  }

  addCandidate(data) {
    return this.http.post(`${this.url}/registerCandidate`, data, headeroption);
  }
  getCandidate(){
    return this.http.get<any>(`${this.url}/get-all-candidate`,headeroption);
  }

  addInterview(data) {
    return this.http.post(`${this.url}/scheduleinterview`, data, headeroption );
  }
  getInterview(){
    return this.http.get<any>(`${this.url}/get-all-interview`,headeroption);
  }

  getRequirmentByMonth(){
    return this.http.get<any>(`${this.url}/get-all-interviewByDate`,headeroption);
  }

  getRequirmentByStack(){
    return this.http.get<any>(`${this.url}/getallstack`,headeroption);
  }

  
}
