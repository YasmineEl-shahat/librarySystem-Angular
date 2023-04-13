import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookReadOperationComponent } from './book-read-operation.component';

describe('BookReadOperationComponent', () => {
  let component: BookReadOperationComponent;
  let fixture: ComponentFixture<BookReadOperationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookReadOperationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookReadOperationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
