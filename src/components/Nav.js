import React    from 'react';
import { Link } from 'react-router';
import _        from 'lodash';

import DataStore from './../stores/DataStore.js';

class Nav extends React.Component {
    render() {
        let allPages = DataStore.getAllPages();
        allPages = _.sortBy(allPages, [function(page) { return page.menu_order; }]);

        return (
            <header>
                {allPages.map((page) => {
                    return <Link key={page.id} to={`/${page.slug}`} style={{marginRight: '10px'}}>{page.title.rendered}</Link>
                })}
            </header>
        );
    }
}

export default Nav;
