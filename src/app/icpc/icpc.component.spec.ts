import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ICPCComponent } from './icpc.component';

describe('ICPCComponent', () => {
  let component: ICPCComponent;
  let fixture: ComponentFixture<ICPCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ICPCComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ICPCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
