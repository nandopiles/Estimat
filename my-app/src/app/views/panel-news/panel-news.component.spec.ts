import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelNewsComponent } from './panel-news.component';

describe('PanelNewsComponent', () => {
  let component: PanelNewsComponent;
  let fixture: ComponentFixture<PanelNewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PanelNewsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PanelNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
