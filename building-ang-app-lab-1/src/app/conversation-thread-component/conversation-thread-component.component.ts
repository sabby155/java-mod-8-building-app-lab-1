import { Component, OnInit } from '@angular/core';
import { Message } from '../message.model';
import { MessagingDataService } from "src/app/messaging-data.service";

@Component({
  selector: 'app-conversation-thread-component',
  templateUrl: './conversation-thread-component.component.html',
  styleUrls: ['./conversation-thread-component.component.css']
})
export class ConversationThreadComponentComponent implements OnInit {
  //We declare senderMessages and userMessages as we did before, but we no longer assign them values here
  senderMessages: Message[];
  userMessages: Message[];

  //We ask Angular to inject the MessagingDataService by declaring it in our constructor
  constructor(private messagingSvce: MessagingDataService) { }

  ngOnInit(): void {
    //whenever a component has actual initialization work to perform, it is recommended to perform it in ngOnInit() instead of in the constructor, as that gives Angular more flexibility on when to take on the corresponding work.
    this.senderMessages = this.messagingSvce.getSenderMessages();
    this.userMessages = this.messagingSvce.getUserMessages();

    this.messagingSvce.userMessagesChanged.subscribe((messages: Message[]) => {
      console.log("********** messages have changed");
      this.userMessages = messages;
    });
  }

}
