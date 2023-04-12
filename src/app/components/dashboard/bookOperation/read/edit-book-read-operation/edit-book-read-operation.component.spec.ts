import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditBookReadOperationComponent } from './edit-book-read-operation.component';

describe('EditBookReadOperationComponent', () => {
  let component: EditBookReadOperationComponent;
  let fixture: ComponentFixture<EditBookReadOperationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditBookReadOperationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditBookReadOperationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
