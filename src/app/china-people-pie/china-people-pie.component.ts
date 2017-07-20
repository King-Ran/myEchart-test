import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import * as echarts from 'echarts'
@Component({
  selector: 'app-china-people-pie',
  templateUrl: './china-people-pie.component.html',
  styleUrls: ['./china-people-pie.component.css']
})
export class ChinaPeoplePieComponent implements OnInit, AfterViewInit {
  @ViewChild('peoplePie') main;
  private option = {
    title: {
      text: '中国大陆人口',
      subtext: '根据2010年人口普查',
      left: 'center',
      link: 'https://zh.wikipedia.org/wiki/%E4%B8%AD%E5%9B%BD%E5%A4%A7%E9%99%86%E4%BA%BA%E5%8F%A3',
      // tslint:disable-next-line:max-line-length
      sublink: 'https://zh.wikipedia.org/wiki/%E4%B8%AD%E5%8D%8E%E4%BA%BA%E6%B0%91%E5%85%B1%E5%92%8C%E5%9B%BD%E7%AC%AC%E5%85%AD%E6%AC%A1%E5%85%A8%E5%9B%BD%E4%BA%BA%E5%8F%A3%E6%99%AE%E6%9F%A5'
    }
    ,
  }
  ngAfterViewInit(): void {

  }


  constructor() { }

  ngOnInit() {
  }

}
