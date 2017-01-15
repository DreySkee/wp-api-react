import React from 'react';
import axios from 'axios';

export default class App extends React.Component {

	constructor(props) {
        super(props);

        this.state = {
			content: {} 
        }
    }

	componentDidMount(){

	}


	render() {
		const pathname 	= this.props.location.pathname;

		return (
			<div className="wrapper">
				{ React.cloneElement(this.props.children, {contentData: {}})}
			</div>
		);
	}

	getContent(pathname){
		axios.get('http://andreypokrovskiy.com/projects/wp-api/wp-json/wp/v2/pages').then((response) => {

			response.data.map((page, i)=>{
				
				if(`/${page.slug}` == pathname){

					return page;	
				}
				
			})

		}).catch((error) => {
			console.dir(error);
		});
	}
}