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

const MainEvent = ({ id, go, dataEvent, fetchedUser }) => (
	<View activePanel="horizontal">
  <Panel id={this.props.id}>
          <PanelHeader
            left={<HeaderButton>{<Icon24Back />}</HeaderButton>}
          >
          Хакатон 2019
          </PanelHeader>
          <Group>
              <Cell size="l" before={<Avatar size={150} type="app" src="https://pp.userapi.com/c844616/v844616889/9ec4a/9Fk-RI7uchQ.jpg" />} description="107 участников">Казань, 27 сентября</Cell>
              <Button>Вступить</Button>
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
            <Div>
              <Button size="xl">
                Поделиться
              </Button>
            </Div>
          </Panel>
    </View>
);

MainEvent.propTypes = {
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

export default MainEvent;
