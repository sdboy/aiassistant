import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AiFunctionPageComponent } from './ai-function-page.component';

describe('AiFunctionPageComponent', () => {
  let component: AiFunctionPageComponent;
  let fixture: ComponentFixture<AiFunctionPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AiFunctionPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AiFunctionPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
