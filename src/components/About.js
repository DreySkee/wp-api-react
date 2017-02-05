import React        from 'react';
import DataStore    from './../stores/DataStore.js';

class Home extends React.Component {

    render() {
        let page = DataStore.getPageBySlug('about');

        return (
            <div>
                <h1>{page.title.rendered}</h1>
            </div>
        );
    }
}

export default Home;
