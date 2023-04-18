import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

public messages:string[] = [];

public message$ = new Subject<string[]>()

public sendMessage(message:string) {
  this.messages = [ ...this.messages, message]

  this.message$.next(this.messages)
}


  constructor() { }
}
