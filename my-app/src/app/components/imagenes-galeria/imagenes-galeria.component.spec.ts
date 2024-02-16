import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImagenesGaleriaComponent } from './imagenes-galeria.component';

describe('ImagenesGaleriaComponent', () => {
  let component: ImagenesGaleriaComponent;
  let fixture: ComponentFixture<ImagenesGaleriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImagenesGaleriaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ImagenesGaleriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
