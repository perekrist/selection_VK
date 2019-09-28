import React from 'react';
import PropTypes from 'prop-types';
import { Panel, Button, Group, Avatar, PanelHeader, View, Header, HorizontalScroll, Link, Cell, Div } from '@vkontakte/vkui';

const itemStyle = {
	flexShrink: 0,
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'center',
	fontSize: 16
}

const Home = ({ go, dataEvent }) => (
	<View activePanel="horizontal">
		
		
		<Panel id="horizontal">
			<PanelHeader> Привет  </PanelHeader>

				<Group>
					<Header level="secondary" aside={<Link onClick={go} data-to="persik">Показать все</Link>}>Последние добавления</Header>
					<HorizontalScroll>
						<div style={{ display: 'flex' }}>
							{dataEvent.map((i)=>{return (
								<div style={{ ...itemStyle, paddingLeft: 3 }} description="15">
									<Avatar type="image" src={i.imgEvent} size={128} style={{ marginBottom: 16 }} />
									<Cell description={i.valEvent + " участников"} align='center' style={{ paddingLeft: 3 }}><b>{i.nameEvent}</b></Cell>
								</div>
							)})};
						</div>
					</HorizontalScroll>
				</Group>
				<Group>
					<Header level="secondary" aside={<Link onClick={go} data-to="persik">Показать все</Link>}>Вы учавствуете</Header>
					<HorizontalScroll>
						<div style={{ display: 'flex' }}>
							<div style={{ ...itemStyle, paddingLeft: 6 }}>
								<Avatar type="image" src="https://yt3.ggpht.com/a/AGF-l78TPPJBHH1ff6PND4r5qd6eyCbJNa_jqZfgxw=s900-c-k-c0xffffffff-no-rj-mo" size={128} style={{ marginBottom: 16, paddingBottom: 0 }} />
								<Cell description="50000 участников" align='center' style={{ paddingLeft: 6 }}><b>Цифровой прорыв</b></Cell>
							</div>
						</div>
					</HorizontalScroll>
				</Group>
			<Group>
				<Div>
					<Button size="xl" onClick={go} data-to="persik">
						Создать событие
					</Button>
				</Div>
			</Group>
		</Panel>
	</View>

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
