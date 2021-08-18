import { Component, Input, OnInit, TemplateRef } from '@angular/core';
import { TTimeline } from './types';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss'],
})
export class TimelineComponent implements OnInit {
  @Input() leftContainer?: TemplateRef<any>;
  @Input() rightContainer?: TemplateRef<any>;
  @Input()
  get data(): TTimeline[] {
    return this._data;
  }
  set data(data: TTimeline[]) {
    this._data = [...data];
  }
  _data: TTimeline[] = [];

  @Input() reverse?: boolean = false;

  constructor() {}

  ngOnInit(): void {
    this.changeOrder();
  }

  /**
   * @description Change the order if order is 'upward' the order is like how to come, but order is 'downward' the order is recerse
   */
  changeOrder() {
    if (this.data && this.reverse) {
      this.data = this.data.reverse();
    }
  }
}
