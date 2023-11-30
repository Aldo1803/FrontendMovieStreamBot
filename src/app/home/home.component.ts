import { Component, OnInit } from '@angular/core';
import { ChatService } from '../chat.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  chats: any = [];

  constructor(private chatService: ChatService) { }


  ngOnInit() {
    this.getChats();
  }

  getChats() {
    this.chatService.getChats().subscribe((data: any) => {
      this.chats = data;
      
    });
  }

  deleteChat(chatId: string) {
    this.chatService.deleteChat(chatId).subscribe((data: any) => {
      this.getChats();
    });
  }
}
