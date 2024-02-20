import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CancerCardComponent } from './cancer-card.component';

describe('CancerCardComponent', () => {
  let component: CancerCardComponent;
  let fixture: ComponentFixture<CancerCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CancerCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CancerCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
