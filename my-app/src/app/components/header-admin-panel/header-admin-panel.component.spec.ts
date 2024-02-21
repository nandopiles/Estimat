import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderAdminPanelComponent } from './header-admin-panel.component';

describe('HeaderAdminPanelComponent', () => {
  let component: HeaderAdminPanelComponent;
  let fixture: ComponentFixture<HeaderAdminPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderAdminPanelComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HeaderAdminPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
