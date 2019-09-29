import React from 'react';
import PropTypes from 'prop-types';
import { Panel, PanelHeader, HeaderButton, platform, IOS, View } from '@vkontakte/vkui';
import persikSrc from '../../img/persik.png';
import '../../css/Persik.css';
import Icon28ChevronBack from '@vkontakte/icons/dist/28/chevron_back';
import Icon24Back from '@vkontakte/icons/dist/24/back';

const osname = platform();

const Persik = props => (
	console.log("PERSIK"),
	<View activePanel={props.id}>
		<Panel id={props.id}>
			<PanelHeader
				left={<HeaderButton onClick={props.go} data-to="home">
					{osname === IOS ? <Icon28ChevronBack /> : <Icon24Back />}
				</HeaderButton>}
			>
				Persik
		</PanelHeader>
			<img className="Persik" src={persikSrc} alt="Persik The Cat" />
		</Panel>
	</View>
);

Persik.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
};

export default Persik;