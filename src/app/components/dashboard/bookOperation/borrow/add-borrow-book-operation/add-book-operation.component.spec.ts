import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddBookOperationComponent } from './add-book-operation.component';

describe('AddBookOperationComponent', () => {
  let component: AddBookOperationComponent;
  let fixture: ComponentFixture<AddBookOperationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddBookOperationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddBookOperationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
