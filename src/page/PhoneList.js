import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { List, Avatar, Icon } from 'antd';
import Info from '../data/Info'

class PhoneList extends Component{

  constructor(props){
    super(props)
    this._info = new Info();
  }

  state = {
    list : []
  }

  componentDidMount(){
    this.setState({list : this._info._getInfomation()})
  }

  //즐겨찾기 on/off
  _reverFavorit = id =>{

    //객체의 즐겨찾기 on/off 반영
    const list = this._info._reverfavorit(id);

    this.setState({list});
  }
  
  //항목 삭제
  _delItem = id => {

    //객체의 리스트 삭제 반영
    const list = this._info._delInfomation(id);
    
    this.setState({list})

  }

  render(){

    return(
        <List
        itemLayout="horizontal"
        dataSource={this.state.list}
        rowKey="id"
        renderItem={item => (
          // <Link to={`/tel/${item.id}`} >
            <List.Item  
              actions={[<Icon type="star" 
                          theme={(item.favorit) ? 'filled' : 'outlined' } 
                          onClick={()=>this._reverFavorit(item.id)} />,
                          <Link to={`/tel/${item.id}`} >
                            <Icon type="edit" text="156" />
                          </Link>,
                        <Icon type="delete" text="2"
                        onClick={() => this._delItem(item.id)} />
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