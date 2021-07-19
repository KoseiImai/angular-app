import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css']
})
export class HelloComponent implements OnInit {
  // プロパティ・・・クラスに値を保管しておくのに使用。
  title: string;
  message: string;
  price: number;
  now: Date;

  constructor() { 
    setInterval(
      () => { this.now = new Date();}, 1000
    );
  }

  ngOnInit(): void {
    this.title = 'Hello app';
    this.message = 'This is My First Component!!';
    this.price = 123450;
  }

  today () {
    return new Date().toLocaleString();
  }
}
