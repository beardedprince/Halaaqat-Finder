import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditHalqahComponent } from './edit-halqah.component';

describe('EditHalqahComponent', () => {
  let component: EditHalqahComponent;
  let fixture: ComponentFixture<EditHalqahComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditHalqahComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditHalqahComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
