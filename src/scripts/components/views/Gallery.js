import React    from 'react';
import DataStore from './../../stores/DataStore.js';

class Gallery extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
    
        }
    }

    componentDidMount(){
       
    }

    render() {
        let page = DataStore.getPageBySlug('gallery');
        let allData = DataStore.getAll();

        console.log(allData);
       
        return (
            <div>
            {page ?
                <div>
                    <h4>Gallery Template</h4>
                    <h1>{page.title.rendered}</h1>
                    <p>{page.acf.content}</p>
                </div>      
            :''}
            </div>
        );
    }
}

export default Gallery;
