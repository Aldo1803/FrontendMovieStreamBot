import { Component, OnInit } from '@angular/core';
import { ChatService } from '../chat.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-chat-main',
  templateUrl: './chat-main.component.html',
  styleUrl: './chat-main.component.css'
})
export class ChatMainComponent implements OnInit {
  chat: any;

  constructor(private chatService: ChatService, private route: ActivatedRoute, private router: Router) { 
    
  }

  isString(val: any): val is string {
    return typeof val === 'string';
  }

  submitQuery(query: string, textarea: HTMLTextAreaElement) {
  
    if (this.isString(this.chat._id)) {
      this.chatService.postChat(this.chat._id, query).subscribe((data: any) => {
          textarea.value = '';
          this.chat = data;

          setTimeout (() => {
            location.reload();
          }, 2000);

        
      });
    }

  

  }

  ngOnInit(): void {
    const chatId = this.route.snapshot.paramMap.get('chatId') ?? '';
    
    this.chatService.getChat(chatId).subscribe(chat => this.chat = chat);
    
  }
}
