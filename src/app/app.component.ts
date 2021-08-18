import { Component } from '@angular/core';
import { logging } from 'protractor';
import { TOrder, TTimeline } from './timeline/types';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'timeline-tutator';
  data: TTimeline[] = [
    {
      id: 0,
      leftContent: {
        day: 'Friday',
        date: 'August 8, 2021',
        hour: '08:30am',
      },
      rightContent: {
        tags: ['Theropoda', 'Sauropoda', 'Teyuwasu'],
        title: 'Dinasours Roamed the Eart',
        description: '🐱‍🐉🐱‍🐉🐱‍🐉🐱‍🐉🐱‍🐉',
      },
      icon: 'mdi-alert-circle-outline',
      active: true,
    },
    {
      id: 1,
      leftContent: {
        day: 'Saturday',
        date: 'August 8, 2021',
        hour: '10:30am',
      },
      rightContent: {
        tags: ['Theropoda', 'Sauropoda', 'Teyuwasu'],
        title: 'Dinasours Roamed the Eart',
        description: '🐱‍🐉🐱‍🐉🐱‍🐉🐱‍🐉🐱‍🐉',
      },
      icon: 'mdi-alert-circle-outline',
      active: true,
    },
    {
      id: 2,
      leftContent: {
        day: 'Sunday',
        date: 'August 8, 2021',
        hour: '12:30pm',
      },
      rightContent: {
        tags: ['Theropoda', 'Sauropoda', 'Teyuwasu'],
        title: 'Dinasours Roamed the Eart',
        description: '🐱‍🐉🐱‍🐉🐱‍🐉🐱‍🐉🐱‍🐉',
      },
      icon: 'mdi-alert-circle-outline',
      active: true,
    },
  ];
  login() {
    console.log('Hola mundo');
  }
  signUp() {
    console.log('signUp');
  }

  get TOrder() {
    return TOrder;
  }
}
