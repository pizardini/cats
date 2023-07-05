import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewCatComponent } from './new-cat/new-cat.component';
import { SearchCatsComponent } from './search-cats/search-cats.component';



@NgModule({
  declarations: [
    NewCatComponent,
    SearchCatsComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SearchCatsComponent, 
    NewCatComponent]
})
export class CatsModule { }
