import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatButtonModule } from '@angular/material';

const modules = [
  MatButtonModule
];

@NgModule({
  imports: [modules],
  exports: [modules]
})
export class MaterialModule { }
