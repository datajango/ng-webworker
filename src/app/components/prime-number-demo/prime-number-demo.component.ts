import { Component, OnInit } from '@angular/core';
import isPrimeNumber from 'prime-number';
import primeNumberList from 'prime-number/list';
import { interval, Observable, Subscription, timer } from 'rxjs';
import { timeout } from 'rxjs/operators';

enum ItemType {
  Timer = 1,
  Start,
  Stop,  
}

class MessageItem {
  type: ItemType;
  message: string;
}

@Component({
  selector: 'app-prime-number-demo',
  templateUrl: './prime-number-demo.component.html',
  styleUrls: ['./prime-number-demo.component.scss']
})
export class PrimeNumberDemoComponent implements OnInit {
  messages: Array<MessageItem>;
  myTimer : Observable<number> = interval(500);
  mySubscription: Subscription;

  constructor() { }

  ngOnInit() {
    this.messages = new Array<MessageItem>();
  }

  clear() {
    this.messages.length = 0;
  }

  startTimer() {
    this.mySubscription = this.myTimer.subscribe(value => this.messages.push({type: ItemType.Timer, message: ' time-out ' + value}));
  }

  stopTimer() {
    this.mySubscription.unsubscribe();
  }

  runWorker() {
    const worker = new Worker('../../web-worker/prime-number.worker', { 
        type: 'module' 
    });

    worker.onmessage = ({ data }) => {
        this.messages.push({type: ItemType.Stop, message: 'Web Worker finished'});
        // console.log('From Web Worker:', data);
    };    

    this.messages.push({type: ItemType.Start, message: 'Web Worker started'});
    worker.postMessage({});   
 }
 
 runThread() {
    this.messages.push({type: ItemType.Start, message: 'Javascript thread started'});

     const arePrimeList = primeNumberList.map((prime) => {         
         return isPrimeNumber(prime);
     });

     this.messages.push({type: ItemType.Stop, message: 'Javascript thread finished'});
 }

}
