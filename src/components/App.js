import React from 'react';
import TodoList from './TodoList';
import Navbar from './Navbar';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import AddTask from './AddTask';

class App extends React.Component {
	render() {
		return (
			<section id="todo">
				<BrowserRouter>
					<Switch>
						<Route path="/add-task" component={AddTask} />
						<Route path="/" component={TodoList} />
						<Route path="/" component={TodoList} />
					</Switch>
					<Navbar />
				</BrowserRouter>
			</section>
		)
	}
}

export default App;