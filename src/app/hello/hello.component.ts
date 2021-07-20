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
  styleClass: string;

  constructor() { 
    setInterval(
      () => { this.now = new Date();}, 1000
    );
    setInterval( 
      () => { this.styleClass = this.styleClass == 'red' ? '' : 'red';
              console.log(this.styleClass);
            }, 1000
    );
  }

  ngOnInit(): void {
    this.title = 'Hello app';
    this.message = 'This is My First Component!!';
    this.price = 123450;
    this.styleClass = 'red';
  }

  today () {
    return new Date().toLocaleString();
  }
}
