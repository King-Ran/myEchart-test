import { Component, OnInit, ViewChild, AfterViewInit, AfterContentInit } from '@angular/core';
import * as echarts from 'echarts';
@Component({
  selector: 'app-async-data',
  templateUrl: './async-data.component.html',
  styleUrls: ['./async-data.component.css']
})
export class AsyncDataComponent implements OnInit, AfterViewInit {
  @ViewChild('async') main;
  private option = {
    title: {
      text: '异步数据加载示例'
    },
    tooltip: {},
    legend: {
      data: ['销量']
    },
    xAxis: {
      data: []
    },
    yAxis: {},
    series: [{
      name: '销量',
      type: 'bar',
      data: []
    }]
  }
  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    const myChart = echarts.init(this.main.nativeElement);
    myChart.setOption(this.option);
    const data = {
      categories: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子'],
      data: [5, 20, 36, 10, 10, 20],
      name: '销量'
    }
    myChart.on('click', function (params) {
      // 控制台打印数据的名称
      console.log(params.name);
    });
    myChart.showLoading();
    setTimeout(() => {
      myChart.hideLoading();
      myChart.setOption({
        xAxis: {
          data: data.categories
        },
        series: [{
          // 根据名字对应到相应的系列
          name: '销量',
          data: data.data
        }]
      });
    }, 1500)
  }

}
