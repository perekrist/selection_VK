import React from 'react';
//import connect from '@vkontakte/vkui-connect';
import { View } from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';

import Home from './js/panels/Home';
import Persik from './js/panels/Persik';
import Event from './js/panels/Event';


class App extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			activePanel: 'home',
			isLoading: false,
			dataEvent: []
		};

		this.getData();
	}

	getData() {
		return fetch('./json/EventData.json')
			.then((response) => response.json())
			.then((responseJson) => {
				this.setState({
					isLoading: false,
					dataEvent: responseJson
				});
			})			
			.catch((error) => {
				console.error(error);
			});
	}
	componentDidMount() {				
		
	}

	go = (e) => {
		this.setState({ activePanel: e.currentTarget.dataset.to })
	};

	render() {
		if(this.state.dataEvent.length === 0) {
			return null;
		}
		return (
			<View activePanel={this.state.activePanel}>
				<Home id="home" dataEvent = {this.state.dataEvent} go={this.go} />
				<Persik id="persik" go={this.go} />
				<Event id="event" go={this.go} />
			</View>
		)
	};
}

export default App;