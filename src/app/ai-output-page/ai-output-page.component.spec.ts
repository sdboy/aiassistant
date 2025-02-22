import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AiOutputPageComponent } from './ai-output-page.component';

describe('AiOutputPageComponent', () => {
  let component: AiOutputPageComponent;
  let fixture: ComponentFixture<AiOutputPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AiOutputPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AiOutputPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
