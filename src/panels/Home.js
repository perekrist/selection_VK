import React from 'react';
import PropTypes from 'prop-types';
import { Panel, HeaderButton, FixedLayout, Tabs, TabsItem, PanelHeaderContent, Button, Group, Avatar, PanelHeader, View, Header, HorizontalScroll, Link, Cell, Div } from '@vkontakte/vkui';
import Icon24Back from '@vkontakte/icons/dist/24/back'
import Icon24Phone from '@vkontakte/icons/dist/24/phone'
import Icon16Dropdown from '@vkontakte/icons/dist/16/dropdown'
import Icon24User from '@vkontakte/icons/dist/24/user'


const itemStyle = {
	flexShrink: 0,
	width: 80,
	height: 94,
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'center',
	fontSize: 12
}

const Home = ({ go }) => (
	<View activePanel="brand">
  <Panel id="brand">
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
          <div style={{ display: 'flex' }}>
            <div style={{ ...itemStyle, paddingLeft: 4 }}>
              <Avatar size={64} style={{ marginBottom: 8, marginStart: 8 }}><Icon24User /></Avatar>
              Элджей
            </div>
            <div style={itemStyle}>
              <Avatar size={64} style={{ marginBottom: 8, marginStart: 8 }}><Icon24User /></Avatar>
              Ольга
            </div>
            <div style={itemStyle}>
              <Avatar size={64} style={{ marginBottom: 8, marginStart: 8 }}><Icon24User /></Avatar>
              Сергей
            </div>
            <div style={itemStyle}>
              <Avatar size={64} style={{ marginBottom: 8, marginStart: 8 }}><Icon24User /></Avatar>
              Илья
            </div>
            <div style={itemStyle}>
              <Avatar size={64} style={{ marginBottom: 8, marginStart: 8 }}><Icon24User /></Avatar>
              Алексей
            </div>
            <div style={itemStyle}>
              <Avatar size={64} style={{ marginBottom: 8, marginStart: 8 }}><Icon24User /></Avatar>
              Костя
            </div>
            <div style={itemStyle}>
              <Avatar size={64} style={{ marginBottom: 8, marginStart: 8 }}><Icon24User /></Avatar>
              Миша
            </div>
            <div style={{ ...itemStyle, paddingRight: 4 }}>
              <Avatar size={64} style={{ marginBottom: 8, marginStart: 8 }}><Icon24User /></Avatar>
              Вадим
            </div>
          </div>
        </HorizontalScroll>
      </Group>
			<Div style={{display: 'flex'}}>
				<Button size="l" stretched style={{ marginRight: 8 }}>Записи</Button>
		 		<Button size="l" stretched style={{ marginRight: 8 }}>Чаты</Button>
				<Button size="l" stretched style={{ marginRight: 8 }}>Задачи</Button>
			</Div>
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
