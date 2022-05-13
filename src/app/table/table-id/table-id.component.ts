import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-table-id',
  templateUrl: './table-id.component.html',
  styleUrls: ['./table-id.component.css']
})
export class TableIdComponent implements OnInit {
  @Input() id: any;
  constructor() { }

  ngOnInit(): void {
  }

}
