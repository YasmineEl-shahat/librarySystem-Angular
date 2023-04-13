import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddBookReadOperationComponent } from './add-book-read-operation.component';

describe('AddBookReadOperationComponent', () => {
  let component: AddBookReadOperationComponent;
  let fixture: ComponentFixture<AddBookReadOperationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddBookReadOperationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddBookReadOperationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
