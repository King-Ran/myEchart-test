import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import * as   echarts from 'echarts';
import { Http } from '@angular/http';
// import myData from './china-people.json'
@Component({
  selector: 'app-china-people',
  templateUrl: './china-people.component.html',
  styleUrls: ['./china-people.component.css']
})
export class ChinaPeopleComponent implements OnInit, AfterViewInit {
  @ViewChild('people') main;
  private dataCategory: Array<string> = [];
  private data: number[] = [];
  private allData = {
    '广东': 104303,
    '山东': 95793,
    '河南': 94024,
    '四川': 80418,
    '江苏': 78660,
    '河北': 71854,
    '湖南': 65684,
    '安徽': 64501,
    '湖北': 57238,
    '浙江': 54427,
    '广西': 46027,
    '云南': 45966,
    '江西': 44567,
    '辽宁': 43746,
    '黑龙江': 38312,
    '陕西': 37327,
    '福建': 36894,
    '山西': 35712,
    '贵州': 34746,
    '重庆': 28846,
    '吉林': 27462,
    '甘肃': 25575,
    '内蒙': 24706,
    '上海': 23019,
    '新疆': 21813,
    '北京': 19612,
    '天津': 12939,
    '海南': 8672,
    '宁夏': 6301,
    '青海': 5627,
    '西藏': 3002
  }
  private dataShadow: number[] = [];
  private option = {
    title: {
      text: '中国大陆人口',
      subtext: '根据2010年人口普查',
      left: 'center',
      link: 'https://zh.wikipedia.org/wiki/%E4%B8%AD%E5%9B%BD%E5%A4%A7%E9%99%86%E4%BA%BA%E5%8F%A3',
      // tslint:disable-next-line:max-line-length
      sublink: 'https://zh.wikipedia.org/wiki/%E4%B8%AD%E5%8D%8E%E4%BA%BA%E6%B0%91%E5%85%B1%E5%92%8C%E5%9B%BD%E7%AC%AC%E5%85%AD%E6%AC%A1%E5%85%A8%E5%9B%BD%E4%BA%BA%E5%8F%A3%E6%99%AE%E6%9F%A5'
    },
    // 柱子的颜色
    color: ['#3398DB'],
    // 提示鼠标放上去
    tooltip: {
      // none: 'none'
      trigger: 'item',
      formatter: '{a} <br/>{b} : {c} ({d}%)'
      // axisPointer: {            // 坐标轴指示器，坐标轴触发有效
      //   type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
      // }
    },
    // 显示位置
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    // X轴显示
    xAxis: [
      {
        type: 'category',
        data: this.dataCategory,
        axisTick: {
          alignWithLabel: true
        }
      }
    ],
    // Y轴显示
    yAxis: [
      {
        type: 'value'
      }
    ],
    // 放大显示
    dataZoom: [
      {
        type: 'inside'
      }
    ],
    // 数据显示
    series: [
      // {
      //   type: 'bar',
      //   itemStyle: {
      //     normal: { color: 'rgba(0,0,0,0.05)' }
      //   },
      //   barGap: '-100%',
      //   barCategoryGap: '40%',
      //   data: this.dataShadow,
      //   animation: 'true'
      // },
      {
        name: '人口',
        type: 'bar',
        // barWidth: '30%',
        data: this.data,
        itemStyle: {
          normal: {
            color: new echarts.graphic.LinearGradient(
              0, 0, 0, 1,
              [
                { offset: 0, color: '#83bff6' },
                { offset: 0.5, color: '#188df0' },
                { offset: 1, color: '#188df0' }
              ]
            )
          },
          emphasis: {
            color: new echarts.graphic.LinearGradient(
              0, 0, 0, 1,
              [
                { offset: 0, color: '#2378f7' },
                { offset: 0.7, color: '#2378f7' },
                { offset: 1, color: '#83bff6' }
              ]
            )
          }
        }
      }
    ]
  };

  ngAfterViewInit(): void {
    for (const key in this.allData) {
      if (this.allData.hasOwnProperty(key)) {
        this.dataCategory.push(key);
        // console.log(key, this.dataCategory.length)
        this.data.push(this.allData[key]);
        this.dataShadow.push(120000);

      }
    }
    const mychart = echarts.init(this.main.nativeElement)
    mychart.showLoading();
    mychart.setOption(this.option);
    mychart.hideLoading();
    const zoomSize = 6;
    console.log(this.dataCategory);

    mychart.on('click', (params) => {
      console.log(this.dataCategory[Math.max(params.dataIndex - zoomSize / 2, 0)]);
      mychart.dispatchAction({
        type: 'dataZoom',
        startValue: this.dataCategory[Math.max(params.dataIndex - zoomSize / 2, 0)],
        endValue: this.dataCategory[Math.min(params.dataIndex + zoomSize / 2, this.data.length - 1)]
      });
    });
  }


  constructor(private http: Http) { }

  ngOnInit() {

  }

}
