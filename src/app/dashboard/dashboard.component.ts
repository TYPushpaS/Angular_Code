import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import { chart } from 'highcharts';
import { Router } from '@angular/router';
import { RequirmentService } from '../requirment.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  ngOnInit(): void {
    throw new Error("Method not implemented.");
  }

  public options: Highcharts.Options;

  constructor(private router: Router, private requirementService: RequirmentService) {
    this.requirementDetails();
    this.getAllStacks();
  }

  highcharts = Highcharts;
  openingdate: any = [];
  requirementDetails() {
    this.requirementService.getRequirmentByMonth().subscribe(data => {
      console.log(data.add);
      this.add = data;
      console.log(this.add);
      this.openingdate = this.add;
      console.log(this.openingdate.add);

      // let series1 = [];
      // for(let i=0 ; i<this.openingdate.length ; i++) {
      //   series1.push({
      //    data:this.openingdate[i][0]
      //   })
      //   console.log('series1' , series1);
      //}

      const chart = Highcharts.chart('container', {
        title:
          { text: 'Monthly Requirement' },
        xAxis: {
          categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
        },
        series: [{
          type: 'column',
          colorByPoint: true,
          data: this.openingdate.add,
          // data:series1,
          showInLegend: false
        }],
        credits: { enabled: false },
      }, err => {
        console.log(err);
      })

    })

  }
  add(add: any) {
    throw new Error("Method not implemented.");
  }


  // reqNo:any=[];
  // javacount:any=[];
  // meanstackcount:any=[];
  // dotnetcount:any=[];
  // datasciencecount:any=[];
  // othersCount:any=[]

  count: any = [];

  skills: any = [];
  getAllStacks() {
    this.requirementService.getRequirmentByStack().subscribe(interview1 => {
      let series = [];
      console.log('details', interview1.interview1);
      this.count = interview1.interview1;
      console.log(this.count);

      for (let i = 0; i < this.count.length; i++) {
        series.push({
          y: this.count[i][0],
          name: this.count[i][1]
        })
        console.log('series', series);
      }
      const chart = Highcharts.chart('container1', {
        chart: {
          plotBackgroundColor: null,
          plotBorderWidth: null,
          plotShadow: false,
          type: 'pie'
        },
        title: {
          text: 'Requirement',
          x: +20
        },
        legend: {
          shadow: false
        },
        tooltip: {
          pointFormat: '<b>{point.y}</b>'
        },
        plotOptions: {
          pie: {
            allowPointSelect: true,
            grouping: false,
            shadow: false,
            cursor: 'pointer',

            dataLabels: {
              enabled: false
            },
            showInLegend: true
          }
        },

        series:
          [
            {
              type: 'pie',
              color: 'rgba(165,170,217,1)',
              pointPadding: 0.2,
              data: series,

            },
          ],
        credits: {
          enabled: false
        },
      });

    }, err => {
      console.log(err);
    }, () => {
      console.log('Count Came into DashBoard');
    });

  }
}