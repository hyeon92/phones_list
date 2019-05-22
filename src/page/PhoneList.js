import React from 'react';
import { Link } from 'react-router-dom';
import { List, Avatar, Icon } from 'antd';

const PhoneList = ({ listName, list, onFavorit, onDelete }) => {
  let phoneList = [];

  if ('favoritList' === listName) {
    phoneList = list.filter(item => item.favorit === true);
  } else {
    listName = 'List';
    phoneList = list;
  }

  return (
    <List
      itemLayout="horizontal"
      dataSource={phoneList}
      rowKey="id"
      footer={
        <Link to={`/${listName}/add`}>
          <div>
            <Avatar icon="user-add" />
            <span style={{ marginLeft: 16 }}>연락처 추가</span>
          </div>
        </Link>
      }
      renderItem={item => (
        <List.Item
          actions={[
            <Icon
              type="star"
              theme={item.favorit ? 'filled' : 'outlined'}
              onClick={() => onFavorit(item.id)}
            />,
            <Link to={`/${listName}/${item.id}`}>
              <Icon type="edit" text="156" />
            </Link>,
            <Icon type="delete" text="2" onClick={() => onDelete(item.id)} />
          ]}
        >
          <List.Item.Meta
            avatar={<Avatar icon="user" />}
            title={item.name}
            description={item.phone}
          />
        </List.Item>
      )}
    />
  );
};

export default PhoneList;
