import { Component, OnInit } from '@angular/core';
import { fromWorker } from 'observable-webworker';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-demo1',
  templateUrl: './demo1.component.html',
  styleUrls: ['./demo1.component.scss']
})
export class Demo1Component implements OnInit {

  messages: Array<string>;
  messageText: string;

  constructor() { }

  ngOnInit() {
    this.messages = new Array();
    this.messageText = "Your message";
  }

  runWorker() {

    const input$: Observable<string> = of('hello');

    fromWorker<string, string>(() => new Worker('./demo.worker', { type: 'module'}), input$)
      .subscribe(message => {
        // console.log(`Got message`, message);
        this.messages.push(this.messageText);
      });

  }

}
