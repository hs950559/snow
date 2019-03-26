import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ListRoutingModule } from './list-routing.module';
import { ListComponent } from './list.component';
import { UserSearchComponent } from './user-search/user-search.component';
import { OrderByPipe } from './order-by.pipe';

@NgModule({
  declarations: [ListComponent, UserSearchComponent, OrderByPipe],
  imports: [
    CommonModule,
    ListRoutingModule,
    FormsModule
  ]
})
export class ListModule { }
