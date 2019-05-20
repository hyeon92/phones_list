import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as phoneActions from '../store/modules/phone';
import PhoneList from '../page/PhoneList';

class PhoneListContainer extends Component {

  componentDidMount(){

    //메뉴 선택에 따라 데이터 가져오기
    const key = this.props.match.params.list;

    const { phoneActions } = this.props;
    phoneActions.getList(key);

  }

  handleFavorit = (key) => {
    const { phoneActions } = this.props;
    phoneActions.reverseFavorit(key);

  }

  handleDelete = (key) => {
    const { phoneActions } = this.props;
    phoneActions.del(key);

  }

  render(){
    const listName = this.props.match.params.list;

    const { list } = this.props;
    const { handleFavorit, handleDelete } = this;

    return(
      <PhoneList
        listName={listName}
        list={list}
        onFavorit={handleFavorit}
        onDelete={handleDelete}
      />
    )
  }
}

export default connect(
  (state) => ({
    list: state.phone.list,
  }),
  (dispatch) => ({
    phoneActions: bindActionCreators(phoneActions, dispatch)
  })
)(PhoneListContainer);