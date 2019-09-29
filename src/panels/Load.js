import React from 'react';
import PropTypes from 'prop-types';
import {Panel, PanelHeader, platform} from '@vkontakte/vkui';

const Load = props => (
  <Panel id={props.id}>
    <PanelHeader>
      Загрузка
    </PanelHeader>
  </Panel>
);

Load.propTypes = {
  id: PropTypes.string.isRequired,
};

export default Load;
