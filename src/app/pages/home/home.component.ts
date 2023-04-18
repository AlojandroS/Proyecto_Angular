import { Component, OnDestroy } from '@angular/core';
import { MessageService } from 'src/app/core/services/message/message.service';
import { Subject, Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnDestroy {


public messages: string[] = [];
public newMessage: string = "";
public messageSubscription?: Subscription

constructor(
  private messageService: MessageService

) {
  this.messageService.message$.subscribe((messages: string []) => {
    this.messages = this.messages
})
}


public sendMessage() {
  this.messageService.sendMessage(this.newMessage)
}

public ngOnDestroy() {
  this.messageSubscription?.unsubscribe();
}

}
