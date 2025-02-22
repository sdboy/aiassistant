import { Component } from '@angular/core';
import { AiConfigPageComponent } from '../ai-config-page/ai-config-page.component';
import { AiChatPageComponent } from '../ai-chat-page/ai-chat-page.component';
import { AiFunctionPageComponent } from '../ai-function-page/ai-function-page.component';

@Component({
  standalone: true,
  selector: 'app-home-page',
  imports: [AiFunctionPageComponent, AiConfigPageComponent, AiChatPageComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {
  public functionLink: string = '';

  public getFunctionInfo(event: any) {
    if(event === undefined || event === null || event.link === undefined || 
      event.link === null || event.link.length < 1) {
        return;
    }
    this.functionLink = event.link + '/' + event.id;
  }
}
