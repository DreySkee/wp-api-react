import alt  		from './../alt/alt.js';
import DataActions  from './../actions/DataActions.js';

class DataStore {
	constructor() {
		this.pages = {};
		this.posts = {};

		this.bindListeners({
			handleGetPages: DataActions.GET_PAGES_SUCCESS,
			handleGetPosts: DataActions.GET_POSTS_SUCCESS
		});

		this.exportPublicMethods({
			getAllPages: this.getAllPages,
			getPageBySlug: this.getPageBySlug
		});
	}

	// Pages

	handleGetPages(pages) {
		this.setState({ pages });
	}

	getAllPages() { 
		return this.getState().pages; 
	}

	getPageBySlug(slug){
		const pages = this.getState().pages;
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