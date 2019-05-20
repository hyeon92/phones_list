import React, { Component } from 'react';
import { Layout } from 'antd';
import { Route } from 'react-router-dom';
import SideMenu from '../component/SideMenu';
import PhoneDetailContainer from '../containers/PhoneDetailContainer';
import PhoneListContainer from '../containers/PhoneListContainer';

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
          <Route exact path={"/"} component={PhoneListContainer}/>
          <Route exact path={"/:list"} component={PhoneListContainer}/>
          <Route path={"/:list/:key"} component={PhoneDetailContainer}/>
        </Layout.Content>
      </Layout>
    );
  }
}

export default App;