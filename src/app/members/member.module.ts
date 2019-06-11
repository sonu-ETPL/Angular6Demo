import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MemberDetailComponent } from './member-detail/member-detail.component';
@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [ MemberDetailComponent],
    exports: [MemberDetailComponent]
})
export class MemberModule { }
