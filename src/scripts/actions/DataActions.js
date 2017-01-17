import axios from 'axios';
import alt   from './../alt/alt.js';

class DataActions {

	api() {
		return new Promise((resolve, reject) => {
			axios.get('http://andreypokrovskiy.com/projects/wp-api/wp-json/wp/v2/pages').then((response) => {
			   	resolve(response.data);
			}).catch((error) => {
			    reject(error);
			});	
		});		
	}

	getData(cb = () => {}){
	    this.api().then((response)=>{
	   		this.getSuccess(response);
      		cb(response);
	   	});
	}

	getSuccess(payload){
		return payload;
	}
}

export default alt.createActions(DataActions);