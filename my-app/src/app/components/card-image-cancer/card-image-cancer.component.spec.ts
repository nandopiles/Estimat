import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardImageCancerComponent } from './card-image-cancer.component';

describe('CardImageCancerComponent', () => {
  let component: CardImageCancerComponent;
  let fixture: ComponentFixture<CardImageCancerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardImageCancerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CardImageCancerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
