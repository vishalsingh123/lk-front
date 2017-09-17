import { Component, OnInit } from '@angular/core';
import { NewsService } from '../../news.service';

@Component({
  selector: 'app-latest',
  templateUrl: './latest.component.html'
})
export class LatestComponent implements OnInit {
	toi:any[];
	zee:any[];
	ndtv:any[];
	one_india:any[];
	in_today:any[];
	channels:string[] = ["TOI", "INTODAY", "ZEE", "NDTV", "ONEINDIA"] 
  constructor(private news_service: NewsService) { }

  ngOnInit() {
		for(let channel of this.channels) {
			this.loadNews(channel);
		}
  }

	loadNews(channel) {
		this.news_service.getEnglishNews("LATEST", channel).subscribe(result => {
			switch(channel) {
				case "TOI": 
					this.toi = result;
					break;
				case "INTODAY": 
					this.in_today = result;
					break;
				case "ZEE": 
					this.zee = result;
					break;
				case "NDTV": 
					this.ndtv = result;
					break;
				case "ONEINDIA": 
					this.one_india = result;
					break;
			}
		})
	}

}
