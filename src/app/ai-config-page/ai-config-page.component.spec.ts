import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AiConfigPageComponent } from './ai-config-page.component';

describe('AiConfigPageComponent', () => {
  let component: AiConfigPageComponent;
  let fixture: ComponentFixture<AiConfigPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AiConfigPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AiConfigPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
