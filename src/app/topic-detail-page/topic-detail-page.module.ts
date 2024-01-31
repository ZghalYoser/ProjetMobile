// topic-detail-page.module.ts

import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { TopicDetailPage } from './topic-detail-page.component';

@NgModule({
  declarations: [TopicDetailPage],
  imports: [
    IonicModule,
    CommonModule,
    // ... autres imports
  ],
  exports: [TopicDetailPage],
})
export class TopicDetailPageModule {}
