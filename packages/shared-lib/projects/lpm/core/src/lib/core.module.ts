import { NgModule } from '@angular/core';
import { CoreComponent } from './core.component';
import { MatButtonModule } from '@angular/material/button';



@NgModule({
  declarations: [CoreComponent],
  imports: [
    MatButtonModule
  ],
  exports: [CoreComponent]
})
export class CoreModule { }
