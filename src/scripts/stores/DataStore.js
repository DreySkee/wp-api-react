import alt  		from './../alt/alt.js';
import DataActions  from './../actions/DataActions.js';

class DataStore {
	constructor() {
		this.data = {};

		this.bindListeners({
			handleGetData: DataActions.GET_SUCCESS
		});

		this.exportPublicMethods({
			getAll: this.getAll,
			getDataBySlug: this.getDataBySlug
		});
	}

	handleGetData(data) {
		this.setState({ data });
	}

	getAll() { 
		return this.getState().data; 
	}

	getDataBySlug(slug){
		const data = this.getState().data;
		return data[Object.keys(data).find((dataItem, i) => {
			return data[dataItem].slug === slug;
		})] || {};
	}
}

export default alt.createStore(DataStore, 'DataStore');