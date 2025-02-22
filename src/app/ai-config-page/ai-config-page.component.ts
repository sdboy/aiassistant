import { Component, inject, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-ai-config-page',
  imports: [],
  templateUrl: './ai-config-page.component.html',
  styleUrl: './ai-config-page.component.scss'
})
export class AiConfigPageComponent {
  private router = inject(Router);
  
  @Input()
  public set link(link: string) {
    console.log(link);
    this.router.navigateByUrl(link);
  }


}
