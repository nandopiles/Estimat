import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CancerComponent } from './cancer.component';

describe('CancerComponent', () => {
  let component: CancerComponent;
  let fixture: ComponentFixture<CancerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CancerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CancerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
