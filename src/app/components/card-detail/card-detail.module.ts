import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatCardModule } from "@angular/material/card";
import { MatTabsModule } from '@angular/material/tabs';
import { ImagePipeModule } from '@pipes/image-pipe/image.module';
import { SecurePipeModule } from '@pipes/secure-pipe/secure.module';
import { CardDetailComponent } from '@components/card-detail/card-detail.component';


@NgModule({
  declarations: [
    CardDetailComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatTabsModule,
    ImagePipeModule,
    SecurePipeModule
  ],
  exports: [
    CardDetailComponent
  ]
})
export class CardDetailModule { }
