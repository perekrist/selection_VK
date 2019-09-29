import React from 'react';
import connect from '@vkontakte/vkui-connect';
import { View, Alert } from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';
import Home from './panels/Home';
import Persik from './panels/Persik';
import Load from './panels/Load';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activePanel: 'load',
      fetchedUser: null,
      popout: null,
    };
    this.closePopout = this.closePopout.bind(this);
  }
  componentDidMount() {
    connect.subscribe((e) => {
      switch (e.detail.type) {
        case 'VKWebAppGetUserInfoResult':
          this.setState({ fetchedUser: e.detail.data, activePanel: 'home' });
          break;
        case 'VKWebAppShowWallPostBoxResult':
          this.openPopout()
          break;
        default:
          console.log(e.detail.type);
      }
    });
    connect.send('VKWebAppGetUserInfo', {});
		console.log(this.state.fetchedUser);
  }
  go = (e) => {
    this.setState({ activePanel: e.currentTarget.dataset.to })
  };
  share = () => {
    connect.send("VKWebAppShowWallPostBox", {"message": "Я создаю свой сервис!", "attachments": "article102343170_20574_329070dc1572eed67b"});
  }
  openPopout = () => {
    this.setState({ popout:
      <Alert
        actions={[{
          title: 'Ок',
          autoclose: true,
          style: 'destructive'
        }]}
        onClose={this.closePopout}
      >
        <h2>Спасибо!</h2>
        <p>Мы рады, что вы сделали репост!</p>
      </Alert>
    });
  }
  closePopout = () => {
    this.setState({ popout: null });
  }
  render() {
    return (
      <View popout={this.state.popout} activePanel={this.state.activePanel}>
        <Home id="home" share={this.share} fetchedUser={this.state.fetchedUser} go={this.go} />
        <Persik id="persik" go={this.go} />
        // <Load id="load" />
      </View>
    );
  }
}
export default App;
