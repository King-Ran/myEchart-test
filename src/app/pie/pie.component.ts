import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import * as echarts from 'echarts';
@Component({
  selector: 'app-pie',
  templateUrl: './pie.component.html',
  styleUrls: ['./pie.component.css']
})
export class PieComponent implements OnInit, AfterViewInit {
  @ViewChild('pie') main;
  public option = {
    backgroundColor: '#2c343c',
    visualMap: {
      show: false,
      min: 80,
      max: 600,
      inRange: {
        colorLightness: [0, 1]
      }
    },
    series: [
      {
        name: '访问来源',
        type: 'pie',
        radius: '55%',
        // 南丁格尔饼图
        roseType: 'angle',
        // 类名
        label: {
          normal: {
            textStyle: {
              color: 'rgba(255, 255, 255, 0.8)'
            }
          }
        },
        // 类名线条
        labelLine: {
          normal: {
            lineStyle: {
              color: 'rgba(255, 255, 255, 0.3)'
            }
          }
        },
        // 加上阴影的效果
        itemStyle: {
          normal: {
            backgroundColor: '#2c343c',
            // 设置扇形的颜色
            color: ['#c23531'],
            // 阴影的大小
            shadowBlur: 200,
            // 阴影水平方向上的偏移
            shadowOffsetX: 0,
            // 阴影垂直方向上的偏移
            shadowOffsetY: 0,
            // 阴影颜色
            shadowColor: 'rgba(0, 0, 0, 0.5)',
            textStyle: {
              color: 'rgba(255, 255, 255, 0.3)'
            },
            lineStyle: {
              color: 'rgba(255, 255, 255, 0.3)'
            }
          }
          // 重点突出表达
          // emphasis: {
          //   shadowBlur: 200,
          //   shadowColor: 'rgba(0, 0, 0, 0.5)'
          // }
        },
        data: [
          { value: 235, name: '视频广告' },
          { value: 274, name: '联盟广告' },
          { value: 310, name: '邮件营销' },
          { value: 335, name: '直接访问' },
          { value: 400, name: '搜索引擎' }
        ]
      }
    ]
  }
  ngAfterViewInit(): void {
  const myChart = echarts.init(this.main.nativeElement);
    myChart.showLoading();

    setTimeout(() => {
      myChart.setOption(this.option);
      myChart.hideLoading();
    }, 500)
    myChart.on('click', function (params) {
      // 控制台打印数据的名称
      console.log(params);
    });
    myChart.on('legendselectchanged', function (params) {
      // 获取点击图例的选中状态
      const isSelected = params.selected[params.name];
      // 在控制台中打印
      console.log((isSelected ? '选中了' : '取消选中了') + '图例' + params.name);
      // 打印所有图例的状态
      console.log(params.selected);
    });
    // throw new Error('Method not implemented.');
  }

  constructor() { }

  ngOnInit() {
  }

}
