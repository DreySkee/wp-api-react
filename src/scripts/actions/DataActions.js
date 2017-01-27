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
	   		this.getPagesSuccess(response);
      		cb(response);
	   	});
	}

	getPosts(cb = () => {}){
	    this.api(this.postsEndPoint).then((response)=>{
	   		this.getPostsSuccess(response);
      		cb(response);
	   	});
	}

	getPagesSuccess(payload){
		return payload;
	}

	getPostsSuccess(payload){
		return payload;
	}
}

export default alt.createActions(DataActions);