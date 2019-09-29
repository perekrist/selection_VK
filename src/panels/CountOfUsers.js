import React from 'react';
import PropTypes from 'prop-types';
import { Panel, Button, HeaderButton, List, Group, Avatar, PanelHeader, View, Header, HorizontalScroll, Link, Cell, Div } from '@vkontakte/vkui';
import Icon24Back from '@vkontakte/icons/dist/24/back';

const itemStyle = {
	flexShrink: 0,
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'center',
	fontSize: 16
}

const CountOfUsers = ({ go }) => (
	<View activePanel="horizontal">
		<Panel id="horizontal">
      <PanelHeader>
			Список Участников
      left={<HeaderButton>{<Icon24Back />}</HeaderButton>}
      </PanelHeader>
	    </Panel>
	    <Group title="Создатель">
	     <List>
	       <Cell before={<Avatar src="https://pp.userapi.com/c625316/v625316293/347b7/DmD1VKYbwwI.jpg?ava=1" />}>Евгений Авсиевич</Cell>
	       <Cell before={<Avatar src="https://pp.userapi.com/c636327/v636327034/2be85/gt3uFFWTw-w.jpg?ava=1" />}>Татьяна Плуталова</Cell>
	       <Cell before={<Avatar src="https://pp.userapi.com/c841629/v841629884/290ab/STZCXV5wZbg.jpg?ava=1" />}>Олег Илларианов</Cell>
	     </List>
	   	</Group>
	    <Group title="Участники">
	     <List>
	       <Cell before={<Avatar src="https://pp.userapi.com/c625316/v625316293/347b7/DmD1VKYbwwI.jpg?ava=1" />}>Евгений Авсиевич</Cell>
	       <Cell before={<Avatar src="https://pp.userapi.com/c636327/v636327034/2be85/gt3uFFWTw-w.jpg?ava=1" />}>Татьяна Плуталова</Cell>
	       <Cell before={<Avatar src="https://pp.userapi.com/c841629/v841629884/290ab/STZCXV5wZbg.jpg?ava=1" />}>Олег Илларианов</Cell>
	       <Cell before={<Avatar src="https://pp.userapi.com/c625316/v625316293/347b7/DmD1VKYbwwI.jpg?ava=1" />}>Евгений Авсиевич</Cell>
	       <Cell before={<Avatar src="https://pp.userapi.com/c636327/v636327034/2be85/gt3uFFWTw-w.jpg?ava=1" />}>Татьяна Плуталова</Cell>
	       <Cell before={<Avatar src="https://pp.userapi.com/c841629/v841629884/290ab/STZCXV5wZbg.jpg?ava=1" />}>Олег Илларианов</Cell>
	       <Cell before={<Avatar src="https://pp.userapi.com/c625316/v625316293/347b7/DmD1VKYbwwI.jpg?ava=1" />}>Евгений Авсиевич</Cell>
	       <Cell before={<Avatar src="https://pp.userapi.com/c636327/v636327034/2be85/gt3uFFWTw-w.jpg?ava=1" />}>Татьяна Плуталова</Cell>
	       <Cell before={<Avatar src="https://pp.userapi.com/c841629/v841629884/290ab/STZCXV5wZbg.jpg?ava=1" />}>Олег Илларианов</Cell>
	     </List>
	   </Group>
</View>
);

CountOfUsers.propTypes = {
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

export default CountOfUsers;