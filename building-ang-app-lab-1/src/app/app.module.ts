import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ConversationControlComponentComponent } from './conversation-control-component/conversation-control-component.component';
import { ConversationHistoryComponentComponent } from './conversation-history-component/conversation-history-component.component';
import { ConversationThreadComponentComponent } from './conversation-thread-component/conversation-thread-component.component';
import { ContactListComponentComponent } from './contact-list-component/contact-list-component.component';
import { SendMessageComponentComponent } from './send-message-component/send-message-component.component';
import { SenderMessageComponentComponent } from './sender-message-component/sender-message-component.component';
import { UserMessageComponentComponent } from './user-message-component/user-message-component.component';
import { ContactComponentComponent } from './contact-component/contact-component.component';
import { FormsModule } from "@angular/forms";
import { HighlightDirective } from './highlight.directive';
import { LoggingService } from "./logging.service"; // import the new service
import { MessagingDataService } from "./messaging-data.service"; // import the new service
import { HttpClientModule } from "@angular/common/http";
import { MessageCountComponentComponent } from './application-component/conversation-history-component/message-count-component/message-count-component.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ConversationControlComponentComponent,
    ConversationHistoryComponentComponent,
    ConversationThreadComponentComponent,
    ContactListComponentComponent,
    SendMessageComponentComponent,
    SenderMessageComponentComponent,
    UserMessageComponentComponent,
    ContactComponentComponent,
    HighlightDirective,
    MessageCountComponentComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    LoggingService, // add the service as a provider
    MessagingDataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
