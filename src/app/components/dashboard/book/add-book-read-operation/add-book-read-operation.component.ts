import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BookOperation } from 'src/app/models/book-operation';
import { BookOperationService } from 'src/app/services/book-operation.service';

@Component({
  selector: 'app-add-book-read-operation',
  templateUrl: './add-book-read-operation.component.html',
  styleUrls: ['./add-book-read-operation.component.css'],
})
export class AddBookReadOperationComponent {
  bookOperation: BookOperation = new BookOperation();
  errMsg: any = '';
  operationForm: FormGroup = new FormGroup({});
  id: any;
  constructor(
    private _activatedRoute: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder,
    private bookOperationService: BookOperationService
  ) {}
  ngOnInit() {
    this._activatedRoute.paramMap.subscribe((params) => {
      this.id = params.get('id');
      console.log(this.id);
    });

    this.operationForm = this.fb.group({
      member_id: ['', [Validators.required]],
      deadlineDate: [
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
    formData = { ...formData, book_id: Number(this.id) };
    formData = {
      ...formData,
      deadlineDate: this.operationForm.value.deadlineDate,
    };
    await this.bookOperationService.addReadOperation(formData).subscribe(
      async (response: any) => {
        // console.log(response.data.deadlineDate)
        this.router.navigateByUrl('/dashboard/bookOperation/read');
      },
      (error: any) => {
        this.errMsg = error.error.message;
        console.log(this.errMsg);
      }
    );
  }
}
