import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelAdminComponent } from './panel-admin.component';

describe('PanelAdminComponent', () => {
  let component: PanelAdminComponent;
  let fixture: ComponentFixture<PanelAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PanelAdminComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PanelAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
