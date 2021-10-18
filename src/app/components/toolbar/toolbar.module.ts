import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ToolbarRoutingModule } from './toolbar-routing.module';
import { ToolbarComponent } from './toolbar.component';
import { MatToolbarModule } from '@angular/material/toolbar';

@NgModule({
  declarations: [ToolbarComponent],
  exports: [ToolbarComponent],
  imports: [CommonModule, ToolbarRoutingModule, MatToolbarModule],
})
export class ToolbarModule {}
