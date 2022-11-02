import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlphaButtonComponent } from './alpha-button.component';

describe('AlphaButtonComponent', () => {
  let component: AlphaButtonComponent;
  let fixture: ComponentFixture<AlphaButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlphaButtonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlphaButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
