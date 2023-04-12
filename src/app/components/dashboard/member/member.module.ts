import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MemberComponent } from './member.component';
import { AddMemberComponent } from './add-member/add-member.component';

@NgModule({
  declarations: [MemberComponent, AddMemberComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
})
export class MemberModule {}
