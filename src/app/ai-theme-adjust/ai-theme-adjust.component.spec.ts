import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AiThemeAdjustComponent } from './ai-theme-adjust.component';

describe('AiThemeAdjustComponent', () => {
  let component: AiThemeAdjustComponent;
  let fixture: ComponentFixture<AiThemeAdjustComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AiThemeAdjustComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AiThemeAdjustComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
