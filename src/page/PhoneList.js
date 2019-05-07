import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { List, Avatar, Icon } from 'antd';

class PhoneList extends Component{

  render(){
    return(
        <List
        itemLayout="horizontal"
        dataSource={this.props.listdata}
        rowKey="id"
        renderItem={item => (
          // <Link to={`/tel/${item.id}`} >
            <List.Item  
              actions={[<Icon type="star" 
                          theme={(item.favorit) ? 'filled' : 'outlined' } 
                          onClick={() => this.props.favClick(item)} />,
                          <Link to={`/tel/${item.id}`} >
                          <Icon type="edit" text="156" />
                          </Link>,
                        <Icon type="delete" text="2" />
                      ]}>
                        
              <List.Item.Meta
                avatar={<Avatar icon="user" />}
                title={item.name}
                description={item.phone}
              />
            </List.Item>
          // </Link>
        )}
      />
  );
  }
}

export default PhoneList;