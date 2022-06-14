import { Component, Input } from '@angular/core';
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

  // teacher: IProduct[] = [
  //   {
  //     id: 1,
  //     name: "nguyen van hoàng",
  //     age: 30,
  //     gender: 1,
  //     image: 'https://nativespeaker.vn/uploaded/page_291_1510282215_1510282225.jpg',
  //     status: 0
  //   },
  //   {
  //     id: 2,
  //     name: "nguyen thị nụ",
  //     age: 20,
  //     gender: 0,
  //     image: "https://nativespeaker.vn/uploaded/page_291_1510282215_1510282225.jpg",
  //     status: 1
  //   },
  //   {
  //     id: 3,
  //     name: "nguyen van khánh",
  //     age: 50,
  //     gender: 1,
  //     image: "https://nativespeaker.vn/uploaded/page_291_1510282215_1510282225.jpg",
  //     status: 1
  //   },
  //   {
  //     id: 4,
  //     name: "nguyen thị hoa",
  //     age: 18,
  //     gender: 0,
  //     image: "https://nativespeaker.vn/uploaded/page_291_1510282215_1510282225.jpg",
  //     status: 0
  //   }
  // ]
  AdminName = 'Thái hoàng'
  AdminIdentity = '12345'
  //định nghĩa hàm khi click  vào thẻ h1
  schooleName=  "";
  clickH1(){
    console.log("Đã kích vào");
    this.schooleName = 'Poly';
  }
  //dịnh nghĩ khi hàm click ẩn hiện
  showStatus =  true;
  changeTableStatus(){
    this.showStatus = !this.showStatus;
  }
  //địng nghĩ hàm khi thay dổi nội dung input
  inputValue = 'tuannda3';
  changeInput(e: any){
    this.inputValue = e.targer.value;
  }
  //định nghĩ form
  inputValues = {
    name: "",
    age: "",
    image: "",
    gender:"0"
  };
  // onInputName(event: any, info: string){
  //   this.inputValues.name = event.targer.value;
  // }
  // onInputAge(event: any, info: string){
  //   this.inputValues.age =  event.targer.value
  // }
  // onSubmit(){
  //   console.log(this.inputValues);
  //   this.teacher.push({
  //     ...this.inputValues,
  //     age: +this.inputValues.age,
  //     id: this.teacher.length + 1,
  //     gender: +this.inputValues.gender,
  //     status: 0
  //   });
  //   this.inputValues = {
  //     name: "",
  //     age: "",
  //     image:"",
  //     gender: "0",
  //   };
  // }
  // onInput(event:any, key: 'name'|'age'|'image'| 'gender'){
  //   this.inputValues[key] = event.target.value;
  // }

}
