import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl:'./users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  constructor() {
    console.log('users component');
  }

  ngOnInit(): void {
  }

  // Nơi quản lý tất cả dữ liệu và logic của chức năng user
  formValues = {
    id: 0,
    name: '',
    age: 0,
    email: ''
  };

  users = [
    {
      id: 1,
      name: 'tuannda3',
      age: 30,
      email: 'tuannda3@fe.edu.vn',
    },
    {
      id: 15,
      name: 'tuannda2',
      age: 30,
      email: 'tuannda2@fe.edu.vn',
    },
    {
      id: 10,
      name: 'tuannda4',
      age: 30,
      email: 'tuannda4@fe.edu.vn',
    },
  ];

  onParentSubmit(formData: any) {
    //1. Tìm ra id lớn nhất
    const userIds = this.users
      .map(user => user.id)
      .sort((a, b) => a - b); // [1, 10, 15]
    const newId = userIds[userIds.length - 1];

    // Nếu formValues có id = 0 thì là thêm mới -> 2.
    // Nếu formValues có id != 0 thì là chỉnh sửa -> 2.1
    if (this.formValues.id == 0) {
      // 2. Thêm vào mảng
      this.users.push({
        ...formData, // Giá trị con truyền sang
        id: newId + 1
      });
    } else {
      // 2.1 Chỉnh sửa
      const idx = this.users.findIndex((user) => user.id === this.formValues.id);
      if (idx > -1) {
        this.users[idx] = {
          ...formData,
          id: this.formValues.id
        };
      }
    }
  }

  onParentDelete(userId: number) {
    this.users = this.users.filter(user => user.id !== userId);
  }

  onParentEdit(userId: number) {
    // 1. Tìm xem đâu là user được chỉnh sửa
    const editUser = this.users.find(user => user.id === userId);

    if (editUser) {
      return this.formValues = {...editUser};
    }

    return alert('Không tìm thấy user đó!');
  }
}
