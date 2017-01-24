import React from 'react';
import Header from './partials/Header.js';

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
				<Header/>
				{ React.cloneElement(this.props.children)}
			</div>
		);
	}
}