import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AiSlideBarPageComponent } from './ai-slide-bar-page.component';

describe('AiSlideBarPageComponent', () => {
  let component: AiSlideBarPageComponent;
  let fixture: ComponentFixture<AiSlideBarPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AiSlideBarPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AiSlideBarPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
