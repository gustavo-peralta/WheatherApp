import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { AlertModule } from 'ngx-bootstrap/alert';

@NgModule({
  imports: [
    CommonModule,
    ButtonsModule.forRoot(),
    AlertModule.forRoot()
    
  ],
  declarations: []
})
export class SharedModule { }
