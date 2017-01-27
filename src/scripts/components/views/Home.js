import React    from 'react';
import { Link } from 'react-router';

import DataStore from './../../stores/DataStore.js';

class Home extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let page = DataStore.getPageBySlug('homepage');
       
        return (
            <div>
            {page ?
                <div>
                    <h4>Homepage Template</h4>
                    <h1>{page.title.rendered}</h1>
                    <div dangerouslySetInnerHTML={{__html: page.acf.content}} />

                    <div dangerouslySetInnerHTML={{__html: page.content.rendered}} />
                </div>      
            :''}
            </div>
        );
    }
}

export default Home;
