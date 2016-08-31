import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import App from './App';
import Home from "./pages/Home";
import Feature from "./pages/Feature";
import Archive from "./pages/Archive";
import Todos from "./pages/Todos";


const app = document.getElementById('app');

ReactDOM.render(
  <Router history={hashHistory}>
	<Route path="/" component={App}>
		<IndexRoute component={Home} />
		<Route path="feature" component={Feature}/>
		<Route path="archive(/:title)" component={Archive}/>
		<Route path="todos" component={Todos}/>
	</Route>
  </Router>
, app);
