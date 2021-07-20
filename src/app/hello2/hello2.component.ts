import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hello2',
  styleUrls: ['./hello2.component.css'],
  template: `
  <div id="body">
    <h1>{{ title }}</h1>
    <p>{{ message }}</p>
  </div>
  `
})
export class Hello2Component implements OnInit {
  title: string;
  message: string;

  constructor() { }

  ngOnInit(): void {
    this.title = 'Hello2 app';
    this.message = 'This is inline-template!!'
  }

}
