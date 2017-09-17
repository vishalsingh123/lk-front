import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewsRoutingModule } from './news-routing.module';
import { NewsService } from './news.service';
import { NewsComponent } from './news.component';
import { LatestComponent } from './english/latest/latest.component';
import { FinanceComponent } from './english/finance/finance.component';
import { CricketComponent } from './english/cricket/cricket.component';
import { EntertainmentComponent } from './english/entertainment/entertainment.component';

@NgModule({
  imports: [
    CommonModule,
    NewsRoutingModule
  ],
  declarations: [NewsComponent, LatestComponent, FinanceComponent, CricketComponent, EntertainmentComponent]
	providers: [NewsService]
})
export class NewsModule { }
