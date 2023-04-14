import { UserCredintialService } from './../../../../services/user-credintial.service';
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
  bookOperation: BookOperation  = new BookOperation();
  errMsg: any = '';
  operationForm: FormGroup = new FormGroup({});
  id: any ;
  constructor(
    private _activatedRoute: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder,
    private bookOperationService: BookOperationService,
    private userCredintialService :UserCredintialService
  ) {}
  ngOnInit() {
    this._activatedRoute.paramMap.subscribe((params) => {
      this.id = params.get('id');
      console.log(this.id);
    });

    this.operationForm = this.fb.group({
      member_id: ['', [Validators.required]],
      deadlineDate: [
        // this.operationForm?.deadlineDate,
        Validators.required,
        Validators.pattern(/^\d{4}-\d{2}-\d{2}$/),
      ],
    });

    
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

  async operation() {
    let formData = {};
    formData = { ...formData, member_id: this.operationForm.value.member_id };
    formData = { ...formData, book_id: Number(this.id )};
    formData = { ...formData, deadlineDate: this.operationForm.value.deadlineDate };

    await this.bookOperationService
      .addBorrowOperation(formData )
      .subscribe(
        async (response: any) => {
          // console.log(response.data.deadlineDate)
          this.router.navigateByUrl('/dashboard/bookOperation/borrow');
        },
        (error: any) => {
          this.errMsg = error.error.message;
          console.log(this.errMsg);
        }
      );
  }


}
