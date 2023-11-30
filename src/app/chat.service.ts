import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  apiUri = 'http://ec2-54-175-72-15.compute-1.amazonaws.com:3000';

  constructor(private http: HttpClient) { }

  createChat(): Observable<any> {
    return this.http.post(`${this.apiUri}/createChat`, {});
  }

  getChat(chatId: string): Observable<any> {
    return this.http.get(`${this.apiUri}/chat/${chatId}`);
  }

  getChats(): Observable<any> {
    return this.http.get(`${this.apiUri}/chats`);
  }

  deleteChat( chatId: string): Observable<any> {
    return this.http.delete(`${this.apiUri}/chat/${chatId}`);
  }

  postChat(chatId: string, query: any): Observable<any> {
    return this.http.post(`${this.apiUri}/chat/${chatId}`, { query });
  }
}
