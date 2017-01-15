import React 		from 'react';
import {render} 	from 'react-dom';
import axios 		from 'axios';

import App 			from './components/app.js';
import Home 		from './components/views/Home.js';
import About 		from './components/views/About.js';
import views 		from './components/views/views.js';

import {
  browserHistory,
  hashHistory,
  IndexRoute,
  Redirect,
  Route,
  Router
} from 'react-router';



class AppInitializer {

	buildRoutes(data) {

		return data.map((page, i) => {
			
			const component = views[page.acf.template] || views.default;
			console.log(page)
			return (
				<Route
					getComponent={(nextState, cb) => {
						require.ensure([], (require) => {
							cb(null, require(component).default);
						});
					}}
					key={ page.id }
					path={`/${page.slug}`}
				/>					
			);
		});
	}


	run(){
		axios.get('http://andreypokrovskiy.com/projects/wp-api/wp-json/wp/v2/pages').then((response) => {

			render(

				<Router history={browserHistory}>
					<Route path="/" component={ App } >
						<IndexRoute component={ Home } />

						{this.buildRoutes(response.data)}
					</Route>
					<Redirect from="*" to="/" />
			    </Router>

				, document.getElementById('app')
			);

		}).catch((error) => {
			console.dir(error);
		});		
	}
}

new AppInitializer().run();