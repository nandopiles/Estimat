import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardTextCancerComponent } from './card-text-cancer.component';

describe('CardTextCancerComponent', () => {
  let component: CardTextCancerComponent;
  let fixture: ComponentFixture<CardTextCancerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardTextCancerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CardTextCancerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
