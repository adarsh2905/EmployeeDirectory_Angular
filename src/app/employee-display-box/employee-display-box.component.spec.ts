import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeDisplayBoxComponent } from './employee-display-box.component';

describe('EmployeeDisplayBoxComponent', () => {
  let component: EmployeeDisplayBoxComponent;
  let fixture: ComponentFixture<EmployeeDisplayBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeDisplayBoxComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeeDisplayBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
