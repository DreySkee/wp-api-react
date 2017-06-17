# Wordpress REST API + React JS

This boilerplate will help you use React JS with Wordpress REST API.
Clone the project and install node packages:

```
npm i
```

To run the project on localhost:8080:
```
npm start
```

To build the project into /build folder:
```
npm run build
```

You need to have webpack and webpack-dev-server installed globally:
* [`webpack`](http://webpack.github.io/docs/)
```
npm install -g webpack
```

* [`webpack-dev-server`](http://webpack.github.io/docs/webpack-dev-server.html)
```
npm install -g webpack-dev-server
```

Don't forget to update the Worpress installation url in DataActions.js. It's located in src/actions/DataActions.js line 7
```
class DataActions {
	constructor() {
		const appUrl = 'http://andreypokrovskiy.com/projects/wp-api'; // Wordpress installation url
	}
```
