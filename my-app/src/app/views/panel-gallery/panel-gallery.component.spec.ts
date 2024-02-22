import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelGalleryComponent } from './panel-gallery.component';

describe('PanelGalleryComponent', () => {
  let component: PanelGalleryComponent;
  let fixture: ComponentFixture<PanelGalleryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PanelGalleryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PanelGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
