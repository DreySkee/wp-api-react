import React    from 'react';
import DataStore from './../../stores/DataStore.js';

class About extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
    
        }
    }

    render() { 
        let page = DataStore.getPageBySlug('about');
       
        return (
            <div>
            {page ?
                <div>
                    <h4>About Template</h4>
                    <h1>{page.title.rendered}</h1>
                    <p>{page.acf.content}</p>
                </div>      
            :''}
            </div>
        );
    }
}

export default About;
