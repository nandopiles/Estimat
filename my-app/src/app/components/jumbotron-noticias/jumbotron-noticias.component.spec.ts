import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JumbotronNoticiasComponent } from './jumbotron-noticias.component';

describe('JumbotronNoticiasComponent', () => {
  let component: JumbotronNoticiasComponent;
  let fixture: ComponentFixture<JumbotronNoticiasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JumbotronNoticiasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(JumbotronNoticiasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
