import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ChatMainComponent } from './chat-main/chat-main.component'; // Add the import statement for ChatComponent

const routes: Routes = [
  { path: '', component: HomeComponent }, // Home route
  { path: 'chat/:chatId', component: ChatMainComponent } // Chat route with chatId parameter
];


@NgModule({
  imports: [RouterModule.forRoot(routes, { onSameUrlNavigation: 'reload' } )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
