import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DescriptionIndexCardComponent } from './description-index-card.component';

describe('DescriptionIndexCardComponent', () => {
  let component: DescriptionIndexCardComponent;
  let fixture: ComponentFixture<DescriptionIndexCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DescriptionIndexCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DescriptionIndexCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
