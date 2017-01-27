import alt  		from './../alt/alt.js';
import DataActions  from './../actions/DataActions.js';

class DataStore {
	constructor() {
		this.data = {};

		this.bindListeners({
			handleSuccess: DataActions.GET_SUCCESS
		});

		this.exportPublicMethods({
			getAll: 		this.getAll,
			getAllPages: 	this.getAllPages,
			getPageBySlug: 	this.getPageBySlug
		});
	}

	getAll() { 
		return this.getState().data; 
	}

	// Pages

	handleSuccess(data) {
		this.setState({ data });
	}

	getAllPages() { 
		return this.getState().data.pages; 
	}

	getPageBySlug(slug){
		const pages = this.getState().data.pages;
		return pages[Object.keys(pages).find((page, i) => {
			return pages[page].slug === slug;
		})] || {};
	}


	// Posts

	handleGetPosts(posts) {
		this.setState({ posts });
	}

	getAllPosts() { 
		return this.getState().posts; 
	}
}

export default alt.createStore(DataStore, 'DataStore');