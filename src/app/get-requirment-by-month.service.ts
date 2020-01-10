import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
const headeroption = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class GetRequirmentByMonthService {
  url: string= 'http://localhost:8082/talenthunt';

  constructor(private http: HttpClient) { }

  // getRequirmentByMonth(){
  //   return this.http.get<any>(`${this.url}/get-all-interviewByDate`,headeroption);
  // }
}
