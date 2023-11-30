import { Component, OnInit } from '@angular/core';
import { ChatService } from '../chat.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-chats-navbar',
  templateUrl: './chats-navbar.component.html',
  styleUrl: './chats-navbar.component.css'
})
export class ChatsNavbarComponent  {
  
  

  constructor(private chatService: ChatService, private router: Router) { }

  createChat() {
    this.chatService.createChat().subscribe((data: any) => {
      this.router.navigate(['/chat', data._id]);
    });
  }
}
