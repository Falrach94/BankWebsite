import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewGroupDialog } from './new-group.component';

describe('NewGroupComponent', () => {
  let component: NewGroupDialog;
  let fixture: ComponentFixture<NewGroupDialog>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewGroupDialog ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewGroupDialog);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
