import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  constructor() {
    console.log('user component ')
  }

  ngOnInit(): void {
  }
  //Nơi quản lý tất cả dữ liệu và logic  của chức năng users
  formValues = {
    id:0,
    name: "",
    age: 0,
    email: ""
  };
  users= [
    {
      id: 1,
      name: "tuannda3",
      age: 19,
      email: "tuannda3@fe.edu.vn"
    },
    {
      id: 2,
      name: "tuannda4",
      age: 20,
      email: "tuannda4@fe.edu.vn"
    }
  ];
  onParentSubmit(formData: any){
    //1. tìm ra id lớn nhất
    const usersId = this.users
    .map(user => user.id)
    .sort((a,b) => a - b)
    const newId = usersId[usersId.length -1 ];

    if(this.formValues.id == 0 ){
      this.users.push({
        ...formData,id: newId + 1
      })
    }
    else{
      const idx = this.users.findIndex((user) => user.id === this.formValues.id);
      if(idx > 1){
        this.users[idx] = {
          ...formData, id: this.formValues.id
        }
      }
    }

  }
  onParentDelelte(userId: number){
    this.users = this.users.filter( user => user.id !== userId)
  }
  onParentEdit(userId: number){
    const editUser = this.users.find(user => user.id === userId)
    if(editUser){
      return this.formValues = {...editUser};
    }
    return alert("không tìm thấy user đó");
  }

}
