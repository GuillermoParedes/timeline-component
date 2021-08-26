import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { TimelineRoutingModule } from './timeline-routing.module';
import { TimelineComponent } from './timeline.component';

@NgModule({
  declarations: [TimelineComponent],
  imports: [CommonModule, TimelineRoutingModule, HttpClientModule],
  exports: [TimelineComponent],
})
export class TimelineModule {}
