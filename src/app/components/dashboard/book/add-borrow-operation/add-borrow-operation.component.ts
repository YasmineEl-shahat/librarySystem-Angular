import { BookOperationService } from './../../../../services/book-operation.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BookOperation } from 'src/app/models/book-operation';

@Component({
  selector: 'app-add-borrow-operation',
  templateUrl: './add-borrow-operation.component.html',
  styleUrls: ['./add-borrow-operation.component.css'],
})
export class AddBorrowOperationComponent implements OnInit {
  bookOperation: BookOperation | null = null;
  errMsg: any = '';
  operationForm: FormGroup = new FormGroup({});
  id: number = 1;
  constructor(
    private _activatedRoute: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder,
    private bookOperationService: BookOperationService
  ) {}
  ngOnInit() {
    this._activatedRoute.paramMap.subscribe((params) => {
      let id = params.get('id');
      console.log(id);
    });

    this.operationForm = this.fb.group({
      memberId: ['', [Validators.required]],
      deadlineDate: [
        // this.operationForm?.deadlineDate,
        Validators.required,
        Validators.pattern(/^\d{4}-\d{2}-\d{2}$/),
      ],
    });

    // const i =token.id;
    // console.log(token.id)
  }

  //**********form validation functions*******

  isValidControl(name: string): boolean {
    return this.operationForm.controls[name].valid;
  }

  isInValidAndTouched(name: string): boolean {
    return (
      this.operationForm.controls[name].invalid &&
      (this.operationForm.controls[name].dirty ||
        this.operationForm.controls[name].touched)
    );
  }

  isControlHasError(name: string, error: string): boolean {
    return (
      this.operationForm.controls[name].invalid &&
      this.operationForm.controls[name].errors?.[error]
    );
  }
  //*********End of form validation functions**********
}
