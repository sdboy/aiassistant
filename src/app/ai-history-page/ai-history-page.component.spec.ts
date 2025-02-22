import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AiHistoryPageComponent } from './ai-history-page.component';

describe('AiHistoryPageComponent', () => {
  let component: AiHistoryPageComponent;
  let fixture: ComponentFixture<AiHistoryPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AiHistoryPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AiHistoryPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
