import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FootPageComponent } from './foot-page.component';

describe('FootPageComponent', () => {
  let component: FootPageComponent;
  let fixture: ComponentFixture<FootPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FootPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FootPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
