import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Input, Checkbox, Button } from 'antd';
import Info from '../data/Info'

class PhoneDetail extends Component{

  constructor(props){
    super(props)
    this._info = Info.getInstance();
  }

  state = {
  }

  componentDidMount(){

    //신규등록과 수정을 구분하여 데이터 세팅
    const id = this.props.match.params.key*1;

    if(id <= this._info.getLastId()){
      this.setState({list : this._info.getItem(id)});
    }else{
      this.setState({
        list:{
          id: this._info.getLastId()+1,
          name : null,
          phone: null,
          favorit: false
        }
      })
    }
  }

  //이름 변경
  _nameChanged = (e) => {

    const list = this.state.list;

    list.name = e.target.value;

    this.setState({
      list
    })
  }

  //번호변경
  _numChanged = (e) => {

    const list = this.state.list;

    list.phone = e.target.value;

    this.setState({
      list
    })

  }

  //즐겨찾기 on/off
  _chkChanged = () =>{

    const list = this.state.list;

    list.favorit = !list.favorit;

    this.setState({
      list
    })
  }

  //저장
  _save = () => {

    //수정 또는 신규 저장
    const id = this.state.list.id;

    if(id <= this._info.getLastId())
      this._info.modiInfomation(this.state.list);
    else{
      this._info.addInformation(this.state.list);
    }

  }

  render(){

    //이전 화면의 주소에 대한 정보
    let listName = this.props.match.params.list;
    if(listName === "list"){
      listName = "";
    }
    
    return(
      <div>
        <Input placeholder="Name" 
          value={this.state.list ? this.state.list.name : null}
          onChange={this._nameChanged}/>
        <Input placeholder="Phone Number" 
          value={this.state.list ? this.state.list.phone : null}
          onChange={this._numChanged}/>
        <h1></h1>
        <Checkbox checked={this.state.list ? this.state.list.favorit : false}
                  onChange={this._chkChanged}>즐겨찾기</Checkbox>
        <h1></h1>
        <Link to={`/${listName}`}>
        <Button block type="primary" onClick={this._save}>Save</Button>
        </Link>
      </div>
    )
  }
}
export default PhoneDetail;