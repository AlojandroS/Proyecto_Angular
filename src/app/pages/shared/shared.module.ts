import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormComponent } from './components/form/form.component';
import { FormsModule}  from '@angular/forms'
import { ReactiveFormsModule} from '@angular/forms'
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    FormComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule
  ],
  exports: [
    FormComponent
  ]
})
export class SharedModule { }
