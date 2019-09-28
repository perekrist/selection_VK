import React from 'react';
import PropTypes from 'prop-types';
import { Panel, Imput, Button, FormLayout, Checkbox, Textarea, File, FormLayout, Select, Group, Avatar, PanelHeader, View, Header, HorizontalScroll, Link, Cell, Div } from '@vkontakte/vkui';
import Icon24Camera from '@vkontakte/icons/dist/24/camera';


const itemStyle = {
	flexShrink: 0,
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'center',
	fontSize: 16
}

const Forms = ({ go }) => (
	<View activePanel="horizontal">
		<Panel id="horizontal">
       <Imput top="Название мероприятия" placeholder="Введите название"/>
       <Imput top="Дата проведения" placeholder="Выбрать дату" type="date"/>
       <Select top="Направление события" placeholder="Выбрать направление">
          <option value="m">Образ жизни</option>
          <option value="f">Бизнес</option>
        </Select>
        <Textarea top="Описвние" placeholder="Несколько слов о событии"/>
        <FormLayout>
      <File top="Загрузите изображение" before={<Icon24Camera />} size="l">
        Открыть галерею
      </File>
        <FormLayout>
        <Checkbox>Я согласен с <Link>правилами</Link/> </Checkbox>
      </FormLayout>
      <Div>
       <Button>Создать событие</Button>
     </Div>
		</Panel>
	</View>

);

Forms.propTypes = {
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

export default Forms;
