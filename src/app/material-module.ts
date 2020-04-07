import { NgModule } from '@angular/core';

import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

const modules = [
  MatInputModule,
  MatFormFieldModule,
  MatCardModule,
  MatButtonModule,
];
@NgModule({
  imports: modules,
  exports: modules,
})
export class MaterialModule {}
