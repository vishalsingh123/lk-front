import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LatestComponent } from './news/english/latest/latest.component';
import { CricketComponent} from './news/english/cricket/cricket.component';
import { FinanceComponent} from './news/english/finance/finance.component';
import { EntertainmentComponent} from './news/english/entertainment/entertainment.component';
import { HlatestComponent } from './news/hindi/hlatest/hlatest.component';
const routes: Routes = [
  {
    path: '',
    component: LatestComponent 
  },
	{
    path: 'english/cricket',
    component: CricketComponent 
  },
	{
    path: 'english/finance',
    component: FinanceComponent 
  },
	{
    path: 'english/entertainment',
    component: EntertainmentComponent 
  },
	{
    path: 'hindi/latest	',
    component: HlatestComponent 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
