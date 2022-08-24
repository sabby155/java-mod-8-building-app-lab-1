import { LoggingService } from "./logging.service";
import { Message } from './message.model';
import { Injectable, EventEmitter } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable()
export class MessagingDataService {
  
  private senderMessages: Message[] = [];
  
  private userMessages: Message[] = [];
  
  userMessagesChanged = new EventEmitter<Message[]>();
  senderMessagesChanged = new EventEmitter<Message[]>();

  addUserMessage(newMessage: Message) {
    this.userMessages.push(newMessage);
    this.userMessagesChanged.emit(this.userMessages.slice());
  }

  getSenderMessages() {
    this.httpClient
      .get<Message[]>("http://localhost:8080/api/get-sender-messages")
      .subscribe((messages: Message[]) => {
        console.log(messages);
        this.senderMessages = messages;
        this.senderMessagesChanged.emit(this.senderMessages);
      });
    return this.senderMessages.slice();
  }

  getUserMessages() {
    //The get() method returns an "Observable"
    //an Observable must be subscribed to in order for us to be able to get the results of the call when it completes
    this.httpClient.get<Message[]>("http://localhost:8080/api/get-user-messages").subscribe(
      (messages: Message[]) => {
        console.log(messages);
        this.userMessages = messages;
        this.userMessagesChanged.emit(this.userMessages);
      }
    )
    return this.userMessages.slice();
  }


  constructor(private loggingSvce: LoggingService, private httpClient: HttpClient) {
    loggingSvce.log("Messaging Data Service constructor completed");
  }
}
