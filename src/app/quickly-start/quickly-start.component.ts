import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import * as echarts from 'echarts';
@Component({
  selector: 'app-quickly-start',
  templateUrl: './quickly-start.component.html',
  styleUrls: ['./quickly-start.component.css']
})
export class QuicklyStartComponent implements OnInit, AfterViewInit {
  @ViewChild('main') main;

  // 指定图表的配置项和数据
  private option = {
    title: {
      text: 'ECharts 入门示例'
    },
    tooltip: {},
    legend: {
      data: ['销量']
    },
    xAxis: {
      data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
    },
    yAxis: {},
    series: [{
      name: '销量',
      type: 'bar',
      data: [5, 20, 36, 10, 10, 20]
    }]
  };

  // 使用刚指定的配置项和数据显示图表。

  constructor() { }

  ngOnInit() {
    // 基于准备好的dom，初始化echarts实例

  }

  ngAfterViewInit() {
    const myChart = echarts.init(this.main.nativeElement);
    myChart.setOption(this.option);
    console.log(document.getElementById('main'))
  }
}
