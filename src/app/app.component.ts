import { Component } from '@angular/core';
import { IProduct } from './model/Product';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular_web206';
  name = 'thidepzai';
  class = 'WE16304';

  students = [
    {
      id: ' 1',
      name: "ACB",
      status: 0,
    },
    {
      id: '2',
      name: 'BIDV',
      status: 1,
    }
  ]

  teacher: IProduct[] = [
    {
      id: 1,
      name: "nguyen van hoàng",
      age: 30,
      gender: 1,
      image: 'https://nativespeaker.vn/uploaded/page_291_1510282215_1510282225.jpg',
      status: 0
    },
    {
      id: 2,
      name: "nguyen thị nụ",
      age: 20,
      gender: 0,
      image: "https://nativespeaker.vn/uploaded/page_291_1510282215_1510282225.jpg",
      status: 1
    },
    {
      id: 3,
      name: "nguyen van khánh",
      age: 50,
      gender: 1,
      image: "https://nativespeaker.vn/uploaded/page_291_1510282215_1510282225.jpg",
      status: 1
    },
    {
      id: 4,
      name: "nguyen thị hoa",
      age: 18,
      gender: 0,
      image: "https://nativespeaker.vn/uploaded/page_291_1510282215_1510282225.jpg",
      status: 0
    }
  ]
  AdminName = 'Thái hoàng'
  AdminIdentity = '12345'

}
