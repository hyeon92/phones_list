import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { List, Avatar, Icon } from 'antd';
import Info from '../data/Info'

class PhoneList extends Component{

  constructor(props){
    super(props)
    this._info = Info.getInstance();
  }

  state = {
    list : []
  }

  componentDidMount(){

    //메뉴 선택에 따라 데이터 가져오기
    const key = this.props.match.params.list;

    if(key === "favoritList")
      this.setState({list : this._info.getFavoritList()});
    else
      this.setState({list : this._info.getList()});

  }

  //즐겨찾기 on/off
  _reverFavorit = id =>{

    //객체의 즐겨찾기 on/off 반영
    const list = this._info.reverfavorit(id);

    this.setState({list});
  }
  
  //항목 삭제
  _delItem = id => {

    //객체의 리스트 삭제 반영
    const list = this._info.delInfomation(id);
    
    this.setState({list});

  }

  render(){

    //상세보기 화면의 route 주소에 사용
    let listName = this.props.match.params.list;
    if(listName === undefined){
      listName = "list";
    }

    return(
        <List
        itemLayout="horizontal"
        dataSource={this.state.list}
        rowKey="id"
        footer={<Link to={`/${listName}/add`} ><div ><Avatar icon="user-add"/><span style={{marginLeft: 16}}>연락처 추가</span></div></Link>}
        renderItem={item => (
          <List.Item  
            actions={[<Icon type="star" 
                        theme={(item.favorit) ? 'filled' : 'outlined' } 
                        onClick={()=>this._reverFavorit(item.id)} />,
                        <Link to={`/${listName}/${item.id}`} >
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
        )}
      />
  );
  }
}

export default PhoneList;