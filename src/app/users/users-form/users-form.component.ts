import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-users-form',
  templateUrl: './users-form.component.html',
  styleUrls: ['./users-form.component.css']
})
export class UsersFormComponent implements OnInit {
  // @Input() inputValues: any;
  @Input() inputValues: {
    id: number,
    name: string,
    age: number,
    email: string
  };
  // 1. Định nghĩa sự kiện để bắn dữ liệu ngược lại
  @Output() handleSubmit: EventEmitter<any>;

  constructor() {
    // 2. Khai báo giá trị default
    this.handleSubmit = new EventEmitter();
    this.inputValues = {
      id: 0,
      name: '',
      age: 0,
      email: ''
    };
  }

  ngOnInit(): void {
  }

  onSubmit(userForm: NgForm) { // Nhận toàn bộ form
    console.log(userForm);
    // 3. Gửi dữ liệu đi
    this.handleSubmit.emit(userForm.value);

    userForm.resetForm({
      name: '',
      age: 0,
      email: ''
    });
  }
}
