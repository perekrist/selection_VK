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

const Home = ({ go }) => (
	<View activePanel="home">
	<Panel id="home">
		<PanelHeader> Помогаю </PanelHeader>
		<Group> 
			<Header level="secondary" aside={<Link onClick={go} data-to="persik">Показать все</Link>}>Последние добавления</Header>
			<HorizontalScroll>
				<Div style={{ display: 'flex' }}>
					<Div style={{ ...itemStyle, paddingLeft: 6 }} description="15">
						<Avatar type="image" src="" size={128} style={{ marginBottom: 16 }} />
						<CellButton description=" участников" align='center' style={{ paddingLeft: 6 }} onClick={go} data-to="first"><b>Цифровой прорыв</b></CellButton>
					</Div>
					<Div style={{ ...itemStyle, paddingLeft: 6 }} description="15">
						<Avatar type="image" src="https://yt3.ggpht.com/a/AGF-l7-Sd_K7nMAvb6rnZmAjh-sUHVW2fSuov_BdRQ=s900-c-k-c0xffffffff-no-rj-mo" size={128} style={{ marginBottom: 16 }} onClick={ () => this.setState({ activePanel: 'mainpage' }) }/>
						<Cell description="15 участников" align='center' style={{ paddingLeft: 6 }}><b>Цифровой прорыв</b></Cell>
					</Div>
					<Div style={{ ...itemStyle, paddingLeft: 6 }} description="15">
						<Avatar type="image" src="https://yt3.ggpht.com/a/AGF-l7-Sd_K7nMAvb6rnZmAjh-sUHVW2fSuov_BdRQ=s900-c-k-c0xffffffff-no-rj-mo" size={128} style={{ marginBottom: 16 }} onClick={ () => this.setState({ activePanel: 'mainpage' }) }/>
						<Cell description="222 участников" align='center' style={{ paddingLeft: 6 }}><b>Цифровой прорыв</b></Cell>
					</Div>
					<Div style={{ ...itemStyle, paddingLeft: 6 }} description="15">
						<Avatar type="image" src="https://yt3.ggpht.com/a/AGF-l7-Sd_K7nMAvb6rnZmAjh-sUHVW2fSuov_BdRQ=s900-c-k-c0xffffffff-no-rj-mo" size={128} style={{ marginBottom: 16 }} onClick={ () => this.setState({ activePanel: 'mainpage' }) }/>
						<Cell description="65494 участников" align='center' style={{ paddingLeft: 6 }}><b>Цифровой прорыв</b></Cell>
					</Div>
					<Div style={{ ...itemStyle, paddingLeft: 6 }} description="15">
						<Avatar type="image" src="https://yt3.ggpht.com/a/AGF-l7-Sd_K7nMAvb6rnZmAjh-sUHVW2fSuov_BdRQ=s900-c-k-c0xffffffff-no-rj-mo" size={128} style={{ marginBottom: 16 }} onClick={ () => this.setState({ activePanel: 'mainpage' }) }/>
						<Cell description="688 участников" align='center' style={{ paddingLeft: 6 }}><b>Цифровой прорыв</b></Cell>
					</Div>
					<Div style={{ ...itemStyle, paddingLeft: 6 }} description="15">
						<Avatar type="image" src="https://yt3.ggpht.com/a/AGF-l7-Sd_K7nMAvb6rnZmAjh-sUHVW2fSuov_BdRQ=s900-c-k-c0xffffffff-no-rj-mo" size={128} style={{ marginBottom: 16 }} onClick={ () => this.setState({ activePanel: 'mainpage' }) }/>
						<Cell description="61 участников" align='center' style={{ paddingLeft: 6 }}><b>Цифровой прорыв</b></Cell>
					</Div>
				</Div>
			</HorizontalScroll>
		</Group>
		<Group>
			<Header level="secondary" aside={<Link onClick={go} data-to="persik">Показать все</Link>}>Вы учавствуете</Header>
			<HorizontalScroll>
				<Div style={{ display: 'flex' }}>
					<Div style={{ ...itemStyle, paddingLeft: 6 }}>
						<Avatar type="image" src="https://yt3.ggpht.com/a/AGF-l78TPPJBHH1ff6PND4r5qd6eyCbJNa_jqZfgxw=s900-c-k-c0xffffffff-no-rj-mo" size={128} style={{ marginBottom: 16, paddingBottom: 0 }} />
						<Cell description="50000 участников" align='center' style={{ paddingLeft: 6 }}><b>Цифровой прорыв</b></Cell>
					</Div>
				</Div>
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
	 <Panel id="mainpage">
     <PanelHeader
       left={<HeaderButton>{<Icon24Back />}</HeaderButton>}
       right={<HeaderButton>{<Icon24Phone />}</HeaderButton>}
     >
     Хакатон 2019
     </PanelHeader>
 		<Group>
         <Cell size="l" before={<Avatar size={150} type="app" src="https://pp.userapi.com/c844616/v844616889/9ec4a/9Fk-RI7uchQ.jpg" />} description="107 участников">Казань, 27 сентября</Cell>
 				<Button level="secondary">Вы вступили</Button>
       </Group>
 		<Div style={{ paddingTop: 10, paddingBottom: 10, color: 'gray' }}>
 		Цифровой прорыв — новый конкурс платформы «Россия – страна возможностей».
 Лучшие участники попадут на самый большой хакатон страны. Победители получат денежные призы и гранты, а также возможность реализовать свои проекты.
 		</Div>
 		<PanelHeader>HorizontalScroll</PanelHeader>
       <Group style={{ paddingBottom: 4, marginStart: 4 }}>
         <Header level="secondary">Участники</Header>
         <HorizontalScroll>
           <Div style={{ display: 'flex' }}>
             <Div style={{ ...itemStyle, paddingLeft: 4 }}>
               <Avatar size={64} style={{ marginBottom: 8, marginStart: 8 }}><Icon24User /></Avatar>
               Элджей
             </Div>
             <Div style={itemStyle}>
               <Avatar size={64} style={{ marginBottom: 8, marginStart: 8 }}><Icon24User /></Avatar>
               Ольга
             </Div>
             <Div style={itemStyle}>
               <Avatar size={64} style={{ marginBottom: 8, marginStart: 8 }}><Icon24User /></Avatar>
               Сергей
             </Div>
             <Div style={itemStyle}>
               <Avatar size={64} style={{ marginBottom: 8, marginStart: 8 }}><Icon24User /></Avatar>
               Илья
             </Div>
             <Div style={itemStyle}>
               <Avatar size={64} style={{ marginBottom: 8, marginStart: 8 }}><Icon24User /></Avatar>
               Алексей
             </Div>
             <Div style={itemStyle}>
               <Avatar size={64} style={{ marginBottom: 8, marginStart: 8 }}><Icon24User /></Avatar>
               Костя
             </Div>
             <Div style={itemStyle}>
               <Avatar size={64} style={{ marginBottom: 8, marginStart: 8 }}><Icon24User /></Avatar>
               Миша
             </Div>
             <Div style={{ ...itemStyle, paddingRight: 4 }}>
               <Avatar size={64} style={{ marginBottom: 8, marginStart: 8 }}><Icon24User /></Avatar>
               Вадим
             </Div>
           </Div>
         </HorizontalScroll>
       </Group>
 			<Div>
 				<Button size="xl" onClick={go} data-to="persik">
 					Поделиться
 				</Button>
 			</Div>
 			// <Div style={{display: 'flex'}}>
 			// 	<Button size="l" stretched style={{ marginRight: 8 }}>Записи</Button>
 		 	// 	<Button size="l" stretched style={{ marginRight: 8 }}>Чаты</Button>
 			// 	<Button size="l" stretched style={{ marginRight: 8 }}>Задачи</Button>
 			// </Div>
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
