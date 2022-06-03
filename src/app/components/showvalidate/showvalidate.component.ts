import { Component, OnInit ,Input} from '@angular/core';

@Component({
  selector: 'app-showvalidate',
  templateUrl: './showvalidate.component.html',
  styleUrls: ['./showvalidate.component.css']
})
export class ShowvalidateComponent implements OnInit {
  @Input() field: any;
  @Input() key!: string;
  constructor() {

  }
  ngOnInit(): void {
  }

}
