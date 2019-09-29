import React from 'react';
import PropTypes from 'prop-types';
import { Panel, Button, CellButton, Group, HeaderButton, List, Avatar, PanelHeader, View, Header, HorizontalScroll, Link, Cell, Div } from '@vkontakte/vkui';
import Icon24Back from '@vkontakte/icons/dist/24/back';
import Icon24Phone from '@vkontakte/icons/dist/24/phone';
import Icon16Dropdown from '@vkontakte/icons/dist/16/dropdown';
import Icon24User from '@vkontakte/icons/dist/24/user';


const itemStyle = {
	flexShrink: 0,
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'center',
	fontSize: 16
}

const Account = ({ go }) => (
	<View>
	<Panel id="account">
		<PanelHeader> Помогаю </PanelHeader>      

   </Panel>
	</View>

);

Account.propTypes = {
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

export default Account;
