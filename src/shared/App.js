import React, { Component } from 'react';
import { Layout } from 'antd';
import { Route } from 'react-router-dom';
import SideMenu from '../component/SideMenu';
import PhoneList from '../page/PhoneList';
import PhoneDetail from '../page/phoneDetail';

class App extends Component {

  state = {
    collapsible: false,
    information: [
      {
        id: 1,
        name: 'S.Ramos',
        phone: '010-2222-2222',
        favorit: false
      },
      {
        id: 2,
        name: 'Son',
        phone: '010-3333-2222',
        favorit: false
      },
      {
        id: 3,
        name: 'D.Drogba',
        phone: '010-5555-2222',
        favorit: false
      },
      {
        id: 4,
        name: 'De Gea',
        phone: '010-2335-2222',
        favorit: true
      },
      {
        id: 5,
        name: 'David Luis',
        phone: '010-2335-2113',
        favorit: false
      },
      {
        id: 6,
        name: 'Kante',
        phone: '010-2311-2222',
        favorit: false
      }
    ]
  }

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }

  render() {
    return (
      <Layout>
        <SideMenu />
        <Layout.Content style={{
          margin: '24px 16px', padding: 24, background: '#fff', minHeight: 280,
        }}
        >
          <Route path={"/"} component={PhoneList}/>
          <Route path={"/tel/:key"} component={PhoneDetail}/>
        </Layout.Content>
      </Layout>
    );
  }
}

export default App;