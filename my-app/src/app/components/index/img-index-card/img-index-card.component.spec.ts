import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImgIndexCardComponent } from './img-index-card.component';

describe('ImgIndexCardComponent', () => {
  let component: ImgIndexCardComponent;
  let fixture: ComponentFixture<ImgIndexCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImgIndexCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ImgIndexCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
