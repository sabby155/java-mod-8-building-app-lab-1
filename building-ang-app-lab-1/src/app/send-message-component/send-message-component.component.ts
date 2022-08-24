import { Component, OnInit } from '@angular/core';
import { LoggingService } from '../logging.service';
import { MessagingDataService } from '../messaging-data.service';
import { User } from '../user.model';

@Component({
  selector: 'app-send-message-component',
  templateUrl: './send-message-component.component.html',
  styleUrls: ['./send-message-component.component.css']
})
export class SendMessageComponentComponent implements OnInit {
  messageString: string;

  //Dependency Injection is a mechanism that lets Angular instantiate the target objects for us
  // declare the loggingSvce variable through the component's constructor
  constructor(private loggingSvce: LoggingService, private messagingSvce: MessagingDataService) { }

  ngOnInit(): void {
  }

  onSendMessage() {
    this.loggingSvce.log("Send following message: ");
    this.loggingSvce.log(this.messageString);
    
    let user = new User("Sabrina", true);

    let message = {
      sender: user,
      text: this.messageString,
    }
    this.messagingSvce.addUserMessage(message);
  }

}
