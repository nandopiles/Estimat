import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardCancerComponent } from './card-cancer.component';

describe('CardCancerComponent', () => {
  let component: CardCancerComponent;
  let fixture: ComponentFixture<CardCancerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardCancerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CardCancerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
