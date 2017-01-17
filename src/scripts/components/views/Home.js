import React    from 'react';
import axios    from 'axios';
import { Link } from 'react-router';

import DataStore from './../../stores/DataStore.js';

class Home extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
    
        }
    }

    componentDidMount(){

    }

    render() {
        let page = DataStore.getDataBySlug('homepage');
       
        return (
            <div>
            {page ?
                <div>
                    <h4>Homepage Template</h4>
                    <h1>{page.title.rendered}</h1>
                    <p>{page.acf.content}</p>

                    <Link activeClassName='active' to='/about'>About</Link> <br />
                    <Link activeClassName='active' to='/gallery'>Gallery</Link> 
                </div>      
            :''}
            </div>
        );
    }
}

export default Home;
