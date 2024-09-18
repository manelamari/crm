import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TemplatesModule } from '../templates/templates.module';
import { TableLightComponent } from './components/table-light/table-light.component';
import { BtnComponent } from './components/btn/btn.component';
import { TotalPipe } from './pipes/total.pipe';
import { StatusDirective } from './directives/state.directive';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [TableLightComponent, BtnComponent, TotalPipe, StatusDirective],
  imports: [CommonModule,RouterModule],
  exports: [
    TemplatesModule,
    TableLightComponent,
    BtnComponent,
    TotalPipe,
    StatusDirective,
    ReactiveFormsModule
  ],
})
export class SharedModule {}
