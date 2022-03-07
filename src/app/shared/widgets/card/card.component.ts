import { Component, Input, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';

@Component({
  selector: 'app-widget-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() label!: string;
  @Input() total!: string;
  @Input() percentage!: string;
  @Input() data = [];

  Highcharts = Highcharts;
  chartOptions = {};
  constructor() { }

  ngOnInit() {
    this.chartOptions = {
      chart: {
        type: 'area',
        backgroundColor: null,
        borderWidth: 0,
        margin: [2, 0, 2, 0],
        height: 60,
        style: {
          overflow: 'visible'
      },
      },
      title: {
        text: null
      },
      subtitle: {
        text: null
      },
      tooltip: {
        split: false,
        hideDelay: 0,
        outside: true,
        shared: true
      },
      legend: {
        enabled: false
      },
      credits: {
        enabled: false,
      },
      exporting: {
        enabled: false,
      },
      xAxis: {
        labels: {
          enabled: false
        },
        title: {
          text: null
        },
        startOnTick: false,
        endonTick: false,
        tickOptions:[]
      },
      yAxis: {
        labels: {
          enabled:false
        },
        gridLineWidth: 0,
        title: {
          text: null
        },
        startOnTick: false,
        endonTick: false,
        tickOptions:[]
      },
      series: [{
        data: this.data
      }]
    };

    HC_exporting(Highcharts);

    setTimeout(() => {
      window.dispatchEvent(
        new Event('resize')
      );
    }, 300);
  }

}
