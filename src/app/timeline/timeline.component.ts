import { animate, style, transition, trigger } from '@angular/animations';
import {
  Component,
  Input,
  OnDestroy,
  OnInit,
  TemplateRef,
} from '@angular/core';
import { Subject } from 'rxjs';
import { TimelineService } from './timeline.service';
import { TTimeline } from './types';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss'],
  animations: [
    trigger('fadeSlideInOut', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(10px)' }),
        animate('500ms', style({ opacity: 1, transform: 'translateY(0)' })),
      ]),
      transition(':leave', [
        animate('500ms', style({ opacity: 0, transform: 'translateY(10px)' })),
      ]),
    ]),
  ],
})
export class TimelineComponent implements OnInit, OnDestroy {
  notifier = new Subject();

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

  @Input() fromServer?: string;

  constructor(private service: TimelineService) {}

  ngOnInit(): void {
    if (this.fromServer) {
      this.service
        .postData(this.fromServer)
        .pipe(takeUntil(this.notifier))
        .subscribe((response: any) => {
          this.data = this.changeOrder(response.data);
        });
    } else {
      this.data = this.changeOrder(this.data);
    }
  }
  /**
   * @description Change the order if order is 'upward' the order is like how to come, but order is 'downward' the order is recerse
   */
  changeOrder(data: any) {
    if (data && this.reverse) {
      return data.reverse();
    }
    return [];
  }

  ngOnDestroy() {
    this.notifier.next();
    this.notifier.complete();
  }
}
