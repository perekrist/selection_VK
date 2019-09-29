import React from 'react';
import connect from '@vkontakte/vkui-connect';
import { View } from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';

import Home from './js/panels/Home';
import Persik from './js/panels/Persik';
import Event from './js/panels/Event';

var qwe;

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
					fetchedUser: null,
					dataEvent: responseJson
				});
			})
			.catch((error) => {
				console.error(error);
			});
	}
	componentDidMount() {
		connect.subscribe((e) => {
			switch (e.detail.type) {
				case 'VKWebAppGetUserInfoResult':
					this.setState({ fetchedUser: e.detail.data });
					break;
				default:
					console.log(e.detail.type);
			}
		});
		connect.send('VKWebAppGetUserInfo', {});
	}

	go = (e) => {
		this.setState({ activePanel: e.currentTarget.dataset.to, activeEvent: e.currentTarget.dataset.evt })
	};

	render() {
		if (this.state.dataEvent.length === 0) {
			return null;
		}
		console.log(this.state, '+++++++');
		switch (this.state.activePanel) {
			case 'persik':
				return (
					<Persik id="persik" go={this.go} />
				)
			case 'home':
				return (
					<Home id="home" dataEvent={this.state.dataEvent} fetchedUser={this.state.fetchedUser} go={this.go} />
				)
			case 'event':
				return (
					<Event id="event" dataEvent={this.state.dataEvent} go={this.go} activeEvent={this.state.activeEvent} />
				)
			// case '':
			// 	return (
					
			// 	)
			default:
				break;
		}
		// return (
		// 	<View activePanel={this.state.activePanel}>
		// 		<Home id="home" dataEvent={this.state.dataEvent} go={this.go} />
		// 		<Persik id="persik" go={this.go} />
		// 		<Event id="event" dataEvent={this.state.dataEvent} go={this.go} activeEvent={this.state.activeEvent} />
		// 	</View>
		// )
	};
}

export default App;