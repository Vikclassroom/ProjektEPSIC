import {Component, Input, Output, EventEmitter , OnInit} from '@angular/core';

@Component({
  selector: 'app-pager',
  templateUrl: './pager.component.html',
  styleUrls: ['./pager.component.scss']
})
export class PagerComponent implements OnInit {
  @Input() totalCount: number;
  @Input() pageSize: number;
  @Output() pageChanged = new EventEmitter<number>();


  constructor() { }

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  onPagerChange(event: any){
    this.pageChanged.emit(event.page);
  }

}
