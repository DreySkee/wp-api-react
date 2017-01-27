import axios from 'axios';
import alt   from './../alt/alt.js';

class DataActions {

	constructor() {
		const appUrl = 'http://andreypokrovskiy.com/projects/wp-api';

		this.pagesEndPoint = `${appUrl}/wp-json/wp/v2/pages`;
		this.postsEndPoint = `${appUrl}/wp-json/wp/v2/posts`;
	}

	api(endPoint) {
		return new Promise((resolve, reject) => {
			axios.get(endPoint).then((response) => {
			   	resolve(response.data);
			}).catch((error) => {
			    reject(error);
			});	
		});		
	}

	getPages(cb = () => {}){
	    this.api(this.pagesEndPoint).then((response)=>{
	   		//this.getPagesSuccess(response);
	   		this.getPosts(response, cb)
      		//cb(response);
	   	});
	}

	getPosts(pages, cb){
	    this.api(this.postsEndPoint).then((response)=>{
	    	const posts 	= response
	    	const payload 	= { pages, posts };

	   		this.getSuccess(payload);
      		cb(payload);
	   	});
	}

	getSuccess(payload){
		return payload;
	}
}

export default alt.createActions(DataActions);