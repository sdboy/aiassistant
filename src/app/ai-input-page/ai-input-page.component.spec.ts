import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AiInputPageComponent } from './ai-input-page.component';

describe('AiInputPageComponent', () => {
  let component: AiInputPageComponent;
  let fixture: ComponentFixture<AiInputPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AiInputPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AiInputPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
