import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubparampathComponent } from './subparampath.component';

describe('SubparampathComponent', () => {
  let component: SubparampathComponent;
  let fixture: ComponentFixture<SubparampathComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubparampathComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubparampathComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
