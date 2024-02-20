import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DescriptionCancerCardComponent } from './description-cancer-card.component';

describe('DescriptionCancerCardComponent', () => {
  let component: DescriptionCancerCardComponent;
  let fixture: ComponentFixture<DescriptionCancerCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DescriptionCancerCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DescriptionCancerCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
