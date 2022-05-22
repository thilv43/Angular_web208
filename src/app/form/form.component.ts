import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {

  }
  inputValues =
    {
      id: 0,
      name: "",
      age: 0,
      email: "",
      sdt: "",
      avatar: ""
    }

  users = [
    {
      id: 1,
      name: 'tuannda3',
      age: 30,
      email: 'tuannda3@fe.edu.vn',
      sdt: "0988888888",
      avatar: "https://nativespeaker.vn/uploaded/page_291_1510282215_1510282225.jpg"
    },
    {
      id: 2,
      name: 'tuannda4',
      age: 20,
      email: 'tuannda4@fe.edu.vn',
      sdt: "09888888889",
      avatar: "https://nativespeaker.vn/uploaded/page_291_1510282215_1510282225.jpg"
    },
  ]
  onSubmit(formData: NgForm){ // nhận toàn bộ giá trị  form
    //1. tìm ra giá trị lớn nhất
    const userIds = this.users
    .map( users =>  users.id)
    .sort((a,b) => a - b);
    const newUserId = userIds[userIds.length - 1]
    //nếu inputValues có id = 0 thì là thêm mới => 2.
    //nếu inputValuse có id != thì là chỉnh sửa => 2.1
    if(this.inputValues.id == 0){
         //thêm vào mảng
        this.users.push({
          ...formData.value, // lấy ra objiect giá trị của form
          id: newUserId + 1
    });
    }
    else{
      // chỉnh sửa
      const index = this.users.findIndex((users) => users.id === this.inputValues.id)
      if(index > -1){
        this.users[index] = {
          ...formData.value,
          id: this.inputValues.id
        }
      }

    }

    //3. cập nhập lại giá trị ban đầu
    // fromData.resetForm();  // nếu không sẽ trả về giá trị null
    formData.resetForm({
      name: '',
      age: 0,
      email: "",
      sdt: "",
      avatar: "",
    });

  }
  onDelete(userId : number){
    this.users = this.users.filter((users) => users.id !== userId)
  }
  onEdit(userId : number){
    const editUser = this.users.find((users) => users.id !== userId);
    if(editUser){
      this.inputValues = {...editUser};
    }
  }
}
