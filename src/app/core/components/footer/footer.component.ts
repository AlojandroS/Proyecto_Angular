import { Component } from '@angular/core';
import { MessageService } from 'src/app/core/services/message/message.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {



  public messages: string[] = []

  public newMessage: string = ''

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
}
