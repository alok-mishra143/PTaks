import { Component, input } from '@angular/core';
import { CounterComponent } from '../counter/counter.component';

@Component({
  selector: 'app-greating',
  imports: [CounterComponent],
  templateUrl: './greating.component.html',
  styleUrl: './greating.component.scss',
})
export class GreatingComponent {
  meassage = input('default message');
  changeMessage() {
    console.log('this is click event');
  }
  keypress(e: Event) {
    console.log('this is keypress event ', e);
  }
}
