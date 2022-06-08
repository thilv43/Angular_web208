import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {
  // dữ liệu sẽ nhận từ cha chứ không quản lý nữa
  @Input() users: any;

  @Output() handleDelete: EventEmitter<number>;
  @Output() handleEdit: EventEmitter<number>;
  constructor() {
    this.handleDelete = new EventEmitter();
    this.handleEdit = new EventEmitter();
  }

  ngOnInit(): void {
  }

  onEdit(userId: number) {
    this.handleEdit.emit(userId);
  }

  onDelete(userId: number) {
    this.handleDelete.emit(userId);
  }
}
