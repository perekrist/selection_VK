import React from 'react';
import 'react-native';
import connect from '@vkontakte/vkui-connect';
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
			fetchedUser: null,
		};
	}

	getData() {
		return fetch('/json/EventData.json')
			.then((response) => response.json())
			.then((responseJson) => {
				this.setState({
					isLoading: false,
					dataSource: responseJson.eventData,
				}, function () {

				});

			})
			.catch((error) => {
				console.error(error);
			});
	}
	componentDidMount() {
		this.getData();
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
		this.setState({ activePanel: e.currentTarget.dataset.to })
	};

	render() {
		return (
			<View activePanel={this.state.activePanel}>
				<Home id="home" fetchedUser={this.state.fetchedUser} data = {this.state.data} go={this.go} />
				<Persik id="persik" go={this.go} />
				<Event id="event" go={this.go} />
			</View>
		)
	};
}

export default App;