import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Http, Response }  from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class NewsService {
	API_BASE = environment.api_base.apiBase +"/"+ environment.api_base.apiPath;
	constructor(private http:Http){}

	getEnglishNews(news_type: string, channel: string): Observable<any[]>{
		let url = this.API_BASE + "/news/english/"+news_type+"/"+channel;	
		return this.http.get(url).map(this.extractData).catch(this.handleError);
	}

	getHindiNews(news_type: string, channel: string): Observable<any[]>{
		let url = this.API_BASE + "/news/hindi/"+news_type+"/"+channel;	
		return this.http.get(url).map(this.extractData).catch(this.handleError);
	}

	private extractData(res: Response) {
		let body = res.json();
		return body || { };
	}

	private handleError (error: Response | any) {
		// In a real world app, you might use a remote logging infrastructure
		let errMsg: string;
		if (error instanceof Response) {
			const body = error.json() || '';
			const err = body.error || JSON.stringify(body);
			errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
		} else {
			errMsg = error.message ? error.message : error.toString();
		}
		console.error(errMsg);
		return Observable.throw(errMsg);
	}
}

