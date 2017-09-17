import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { NgModule } from '@angular/core';
import {HttpModule} from '@angular/http';


import { NewsService } from './news/news.service';


import { AppComponent } from './app.component';
import { LatestComponent } from './news/english/latest/latest.component';
import { CricketComponent} from './news/english/cricket/cricket.component';
import { FinanceComponent} from './news/english/finance/finance.component';
import { EntertainmentComponent} from './news/english/entertainment/entertainment.component';
import { BaseModule } from './base/base.module';
import { HlatestComponent } from './news/hindi/hlatest/hlatest.component';

@NgModule({
  declarations: [
    AppComponent,
		LatestComponent,
		CricketComponent,
		FinanceComponent,
		EntertainmentComponent,
		HlatestComponent
  ],
  imports: [
    BrowserModule.withServerTransition({appId: 'lk-front'}),
    AppRoutingModule,
		HttpModule,
		BaseModule
  ],
  providers: [NewsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
