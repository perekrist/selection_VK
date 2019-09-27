import React from 'react';
import PropTypes from 'prop-types';
import { Panel, ListItem, Button, Group, Div, Avatar, PanelHeader } from '@vkontakte/vkui';
import Persik from './Persik';

const itemStyle = {
    flexShrink: 0,
    width: 80,
    height: 94,
    display: 'flex',
    flexDirection:
    'column',
    alignItems: 'center',
    fontSize: 12
  };

const Home = ({ id, go, fetchedUser }) => (
	<Panel id={id}>
		<PanelHeader>Example</PanelHeader>
		{fetchedUser &&
			<Group title="User Data Fetched with VK Connect">
				<ListItem
					before={fetchedUser.photo_200 ? <Avatar src={fetchedUser.photo_200} /> : null}
					description={fetchedUser.city && fetchedUser.city.title ? fetchedUser.city.title : ''}
				>
					{`${fetchedUser.first_name} ${fetchedUser.last_name}`}
				</ListItem>
			</Group>}

		<Group title="Navigation Example">
			<Div>
				<View activePanel="horizontal">
					<Panel id="horizontal">
						<PanelHeader>HorizontalScroll</PanelHeader>
						<Group style={{ paddingBottom: 8 }}>
							<Header level="secondary">Недавние</Header>
							<HorizontalScroll>
								<div style={{ display: 'flex' }}>
									<div style={{ ...itemStyle, paddingLeft: 4 }}>
										<Avatar size={64} style={{ marginBottom: 8 }}><Persik /></Avatar>
										Элджей
            </div>
									<div style={itemStyle}>
										<Avatar size={64} style={{ marginBottom: 8 }}><Persik /></Avatar>
										Ольга
            </div>
									<div style={itemStyle}>
										<Avatar size={64} style={{ marginBottom: 8 }}><Persik /></Avatar>
										Сергей
            </div>
									<div style={itemStyle}>
										<Avatar size={64} style={{ marginBottom: 8 }}><Persik /></Avatar>
										Илья
            </div>
									<div style={itemStyle}>
										<Avatar size={64} style={{ marginBottom: 8 }}><Persik /></Avatar>
										Алексей
            </div>
									<div style={itemStyle}>
										<Avatar size={64} style={{ marginBottom: 8 }}><Persik /></Avatar>
										Костя
            </div>
									<div style={itemStyle}>
										<Avatar size={64} style={{ marginBottom: 8 }}><Persik /></Avatar>
										Миша
            </div>
									<div style={{ ...itemStyle, paddingRight: 4 }}>
										<Avatar size={64} style={{ marginBottom: 8 }}><Persik /></Avatar>
										Вадим
            </div>
								</div>
							</HorizontalScroll>
						</Group>
					</Panel>
				</View>
				<Button size="xl" level="2" onClick={go} data-to="persik">
					КРИСТИНА, ПРИВЕТ
				</Button>
			</Div>
		</Group>
	</Panel>
);

Home.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
	fetchedUser: PropTypes.shape({
		photo_200: PropTypes.string,
		first_name: PropTypes.string,
		last_name: PropTypes.string,
		city: PropTypes.shape({
			title: PropTypes.string,
		}),
	}),
};

export default Home;
