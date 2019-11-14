import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubparamComponent } from './subparam.component';

describe('SubparamComponent', () => {
  let component: SubparamComponent;
  let fixture: ComponentFixture<SubparamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubparamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubparamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
