import React, { Component } from 'react';
import { Layout } from 'antd';
import { Route } from 'react-router-dom';
import SideMenu from '../component/SideMenu';
import PhoneList from '../page/PhoneList';
import PhoneDetail from '../page/PhoneDetail';

class App extends Component {

  state = {
    collapsible: false
  }

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }

  render() {
    return (
      <Layout >
        <SideMenu />
        <Layout.Content style={{
          marginLeft: 224, marginRight: 24, marginTop: 24, marginBottom: 24, padding: 24, background: '#fff', minHeight: 280,
        }}
        >
          <Route exact path={"/"} component={PhoneList}/>
          <Route exact path={"/:list"} component={PhoneList}/>
          <Route path={"/:list/:key"} component={PhoneDetail}/>
        </Layout.Content>
      </Layout>
    );
  }
}

export default App;