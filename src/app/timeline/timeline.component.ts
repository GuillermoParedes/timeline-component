import { Component, Input, OnInit, TemplateRef } from '@angular/core';
import { TTimeline } from './types';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss'],
})
export class TimelineComponent implements OnInit {
  events: TTimeline[] = [
    {
      id: 0,
      date: {
        day: 'Friday',
        date: 'August 8, 2021',
        hour: '08:30am',
      },
      content: {
        tags: ['Theropoda', 'Sauropoda', 'Teyuwasu'],
        title: 'Dinasours Roamed the Eart',
        description: '🐱‍🐉🐱‍🐉🐱‍🐉🐱‍🐉🐱‍🐉',
      },
      icon: 'mdi-alert-circle-outline',
      active: true,
    },
    {
      id: 1,
      date: {
        day: 'Saturday',
        date: 'August 8, 2021',
        hour: '10:30am',
      },
      content: {
        tags: ['Theropoda', 'Sauropoda', 'Teyuwasu'],
        title: 'Dinasours Roamed the Eart',
        description: '🐱‍🐉🐱‍🐉🐱‍🐉🐱‍🐉🐱‍🐉',
      },
      icon: 'mdi-alert-circle-outline',
      active: true,
    },
    {
      id: 2,
      date: {
        day: 'Sunday',
        date: 'August 8, 2021',
        hour: '12:30pm',
      },
      content: {
        tags: ['Theropoda', 'Sauropoda', 'Teyuwasu'],
        title: 'Dinasours Roamed the Eart',
        description: '🐱‍🐉🐱‍🐉🐱‍🐉🐱‍🐉🐱‍🐉',
      },
      icon: 'mdi-alert-circle-outline',
      active: true,
    },
    {
      id: 3,
      date: {
        day: 'Sunday',
        date: 'August 8, 2021',
        hour: '12:30pm',
      },
      content: {
        tags: ['Theropoda', 'Sauropoda', 'Teyuwasu'],
        title: 'Dinasours Roamed the Eart',
        description: '🐱‍🐉🐱‍🐉🐱‍🐉🐱‍🐉🐱‍🐉',
      },
      icon: 'mdi-alert-circle-outline',
      active: true,
    },
  ];
  @Input() leftContainer?: TemplateRef<any>;
  @Input() rightContainer?: TemplateRef<any>;
  @Input() data?: TTimeline[] = [];
  constructor() {}

  ngOnInit(): void {}
}
