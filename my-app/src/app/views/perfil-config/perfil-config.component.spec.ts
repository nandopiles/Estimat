import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfilConfigComponent } from './perfil-config.component';

describe('PerfilConfigComponent', () => {
  let component: PerfilConfigComponent;
  let fixture: ComponentFixture<PerfilConfigComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PerfilConfigComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PerfilConfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
