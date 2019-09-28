import React from 'react';
import PropTypes from 'prop-types';
import { Panel, Button, HeaderButton, PanelHeader, Group, Avatar, PanelHeader, View, Header, HorizontalScroll, Link, Cell, Div } from '@vkontakte/vkui';
import Icon24Back from '@vkontakte/icons/dist/24/back';



const itemStyle = {
	flexShrink: 0,
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'center',
	fontSize: 16
}

const CreateEvent = ({ go }) => (
	<View activePanel="horizontal">
		<Panel id="horizontal">
			<PanelHeader>
      left={<HeaderButton>{<Icon24Back />}</HeaderButton>}
			Создать событие
      </PanelHeader>
		</Panel>
	</View>

);

CreateEvent.propTypes = {
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

export default CreateEvent;
