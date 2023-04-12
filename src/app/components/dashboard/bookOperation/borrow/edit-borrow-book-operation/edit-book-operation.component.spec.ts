import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditBookOperationComponent } from './edit-book-operation.component';

describe('EditBookOperationComponent', () => {
  let component: EditBookOperationComponent;
  let fixture: ComponentFixture<EditBookOperationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditBookOperationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditBookOperationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
