import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImgCancerCardComponent } from './img-cancer-card.component';

describe('ImgCancerCardComponent', () => {
  let component: ImgCancerCardComponent;
  let fixture: ComponentFixture<ImgCancerCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImgCancerCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ImgCancerCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
