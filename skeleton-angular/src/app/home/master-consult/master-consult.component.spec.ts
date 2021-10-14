import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MasterConsultComponent } from './master-consult.component';

describe('MasterConsultComponent', () => {
  let component: MasterConsultComponent;
  let fixture: ComponentFixture<MasterConsultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MasterConsultComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MasterConsultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
