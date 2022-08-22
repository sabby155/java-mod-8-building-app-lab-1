import { Component, Input, OnInit } from '@angular/core';
import { Message } from '../message.model';

@Component({
  selector: 'app-sender-message-component',
  templateUrl: './sender-message-component.component.html',
  styleUrls: ['./sender-message-component.component.css']
})
export class SenderMessageComponentComponent implements OnInit {
  @Input() message: Message = {
    sender: { firstName: "Ludovic" },
    text: "Message from Ludovic",
    conversationId: 1,
    sequenceNumber: 0,
  };
  constructor() { }

  ngOnInit(): void {
  }

  // If we use ngStyle in badge-span then this logic is needed
  // getCurrentStyles() {
  //   let currentStyles = {
  //     'background-color': this.message.sender.isOnline ? 'blue' : 'red',
  //   };
  //   return currentStyles;
  // }

}
