import React 		from 'react';
import {render} 	from 'react-dom';

import DataActions 	from './actions/DataActions.js';
import App 			from './components/app.js';
import Home 		from './components/views/Home.js';
import views 		from './components/views/views.js';

import {
  browserHistory,
  IndexRoute,
  Redirect,
  Route,
  Router
} from 'react-router';

class AppInitializer {

	buildRoutes(data) {
		return data.pages.map((page, i) => {
			const component = views[page.acf.template] || views.default;
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

	run() {
		DataActions.getPages((response)=>{
			render(
				<Router history={browserHistory}>
					<Route path="/" component={ App } >
						<IndexRoute component={ Home } />

						{this.buildRoutes(response)}
					</Route>
					<Redirect from="*" to="/" />
			    </Router>

				, document.getElementById('app')
			);
		});
	}
}

new AppInitializer().run();