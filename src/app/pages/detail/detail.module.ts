import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CardDetailModule } from '@components/card-detail/card-detail.module';
import { SpinnerModule } from '@components/spinner/spinner.module';
import { DetailRoutingModule } from '@pages/detail/detail-routing.module';
import { DetailComponent } from '@pages/detail/detail.component';


@NgModule({
  declarations: [
    DetailComponent
  ],
  imports: [
    CommonModule,
    DetailRoutingModule,
    FlexLayoutModule,
    CardDetailModule,
    SpinnerModule
  ]
})
export class DetailModule { }
