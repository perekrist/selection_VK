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

const Home = ({ go }) => (
	<View activePanel="horizontal">
		<Panel id="horizontal">
			<PanelHeader> Помогаю </PanelHeader>
			<Group>
				<Header level="secondary" aside={<Link onClick={go} data-to="persik">Показать все</Link>}>Последние добавления</Header>
				<HorizontalScroll>
					<div style={{ display: 'flex' }}>
						<div style={{ ...itemStyle, paddingLeft: 6 }} description="15">
							<Avatar type="image" src="" size={128} style={{ marginBottom: 16 }} />
							<Cell description=" участников" align='center' style={{ paddingLeft: 6 }}><b>Цифровой прорыв</b></Cell>
						</div>
						<div style={{ ...itemStyle, paddingLeft: 6 }} description="15">
							<Avatar type="image" src="https://yt3.ggpht.com/a/AGF-l7-Sd_K7nMAvb6rnZmAjh-sUHVW2fSuov_BdRQ=s900-c-k-c0xffffffff-no-rj-mo" size={128} style={{ marginBottom: 16 }} />
							<Cell description="15 участников" align='center' style={{ paddingLeft: 6 }}><b>Цифровой прорыв</b></Cell>
						</div>
						<div style={{ ...itemStyle, paddingLeft: 6 }} description="15">
							<Avatar type="image" src="https://yt3.ggpht.com/a/AGF-l7-Sd_K7nMAvb6rnZmAjh-sUHVW2fSuov_BdRQ=s900-c-k-c0xffffffff-no-rj-mo" size={128} style={{ marginBottom: 16 }} />
							<Cell description="222 участников" align='center' style={{ paddingLeft: 6 }}><b>Цифровой прорыв</b></Cell>
						</div>
						<div style={{ ...itemStyle, paddingLeft: 6 }} description="15">
							<Avatar type="image" src="https://yt3.ggpht.com/a/AGF-l7-Sd_K7nMAvb6rnZmAjh-sUHVW2fSuov_BdRQ=s900-c-k-c0xffffffff-no-rj-mo" size={128} style={{ marginBottom: 16 }} />
							<Cell description="65494 участников" align='center' style={{ paddingLeft: 6 }}><b>Цифровой прорыв</b></Cell>
						</div>
						<div style={{ ...itemStyle, paddingLeft: 6 }} description="15">
							<Avatar type="image" src="https://yt3.ggpht.com/a/AGF-l7-Sd_K7nMAvb6rnZmAjh-sUHVW2fSuov_BdRQ=s900-c-k-c0xffffffff-no-rj-mo" size={128} style={{ marginBottom: 16 }} />
							<Cell description="688 участников" align='center' style={{ paddingLeft: 6 }}><b>Цифровой прорыв</b></Cell>
						</div>
						<div style={{ ...itemStyle, paddingLeft: 6 }} description="15">
							<Avatar type="image" src="https://yt3.ggpht.com/a/AGF-l7-Sd_K7nMAvb6rnZmAjh-sUHVW2fSuov_BdRQ=s900-c-k-c0xffffffff-no-rj-mo" size={128} style={{ marginBottom: 16 }} />
							<Cell description="61 участников" align='center' style={{ paddingLeft: 6 }}><b>Цифровой прорыв</b></Cell>
						</div>
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