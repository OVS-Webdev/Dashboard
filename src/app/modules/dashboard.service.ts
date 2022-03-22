import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  url= 'https://ceo-dashboard-backend-ovs-webdev.vercel.app/client';
  // url= 'http://192.168.1.40:7000/department';

  test = [] as any;

  constructor(private http: HttpClient) { 
    // this.http.get(this.url).toPromise().then(test => {
    //   console.log(test);
    // });
  }

  getData(){
    this.http.get(this.url).subscribe(
      data => {
        this.test = data as object [];
        console.log(this.test);
      }); 
  }


  getbigChart() {
    return[        
      {
        name: 'Asia',
        data: [502, 635, 809, 947, 1402, 3634, 5268]
      }, {
        name: 'Africa',
        data: [106, 107, 111, 133, 221, 767, 1766]
      }, {
        name: 'Europe',
        data: [163, 203, 276, 408, 547, 729, 628]
      }, {
        name: 'America',
        data: [18, 31, 54, 156, 339, 818, 1201]
      }, {
        name: 'Oceania',
        data: [2, 2, 2, 6, 13, 30, 46]
      }  
    ];
  }

  getcards() {
    return [71, 78, 65, 59, 52, 15];
  }

  getPie(){
    return[
        {name: 'Chrome',
            y: 61.41,
            sliced: true,
            selected: true
        }, {
            name: 'Internet Explorer',
            y: 11.84
        }, {
            name: 'Firefox',
            y: 10.85
        }, {
            name: 'Edge',
            y: 4.67
        }, {
            name: 'Safari',
            y: 4.18
        }, {
            name: 'Sogou Explorer',
            y: 1.64
        }, {
            name: 'Opera',
            y: 1.6
        }, {
            name: 'QQ',
            y: 1.2
        }, {
            name: 'Other',
            y: 2.61}
    ]
  }
}
