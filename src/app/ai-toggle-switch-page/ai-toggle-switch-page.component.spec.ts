import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AiToggleSwitchPageComponent } from './ai-toggle-switch-page.component';

describe('AiToggleSwitchPageComponent', () => {
  let component: AiToggleSwitchPageComponent;
  let fixture: ComponentFixture<AiToggleSwitchPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AiToggleSwitchPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AiToggleSwitchPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
