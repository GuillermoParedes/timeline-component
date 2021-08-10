import { Component } from '@angular/core';
import { logging } from 'protractor';
import { TTimeline } from './timeline/types';

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
  ];
  login() {
    console.log('Hola mundo');
  }
  signUp() {
    console.log('signUp');
  }
}
