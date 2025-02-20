import { Component } from '@angular/core';
import { GreatingComponent } from '../components/greating/greating.component';

@Component({
  selector: 'app-home',
  imports: [GreatingComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
