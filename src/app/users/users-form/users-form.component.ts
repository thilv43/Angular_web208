import { Component, OnInit, Input, Output ,EventEmitter} from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-users-form',
  templateUrl: './users-form.component.html',
  styleUrls: ['./users-form.component.css']
})
export class UsersFormComponent implements OnInit {
  @Input() inputValues: {
    id: number,
    name: string,
    age: number,
    email: string
  }
  //1. địng nghĩa bắt đầu ngược lại
  @Output() handleSubmit: EventEmitter<any>;
  constructor() {
    //2. khai báo
    this.handleSubmit = new EventEmitter();
    this.inputValues = {
      id: 0,
      name: "",
      age:0,
      email:""
    };
  }

  ngOnInit(): void {
  }
  onSubmit(userForm: NgForm) { //nhận toàn bộ form
    console.log(userForm);
    //3.gửi dữ liệu liệu
    this.handleSubmit.emit(userForm.value);
    userForm.resetForm({
      name: '',
      age: 0,
      email: ""
    })
  }

}
