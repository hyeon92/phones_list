import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as phoneActions from '../store/modules/phone';
import PhoneDetail from '../page/PhoneDetail';

class PhoneDetailContainer extends Component {

  componentDidMount(){
    //신규등록과 수정을 구분하여 데이터 세팅
    const id = this.props.match.params.key*1;

    const { phoneActions } = this.props;
    phoneActions.getData(id);

  }

  //이름 변경
  handleEditName = e => {
    const { phoneActions } = this.props;
    phoneActions.editName(e.target.value);

  }

  //번호 변경
  handleEditPhone = e => {
    const { phoneActions } = this.props;
    phoneActions.editPhone(e.target.value);

  }

  //즐겨찾기 on/off
  handleReverseFavorit = () => {
    const { phoneActions } = this.props;
    phoneActions.editFavorit();

  }

  handleSave = () => {
    //수정 또는 신규 저장
    const id = this.props.match.params.key*1;

    const { phoneActions } = this.props;
    phoneActions.save(id);

  }

  render(){
    const listName = this.props.match.params.list;
    
    const { detail } = this.props;

    const { handleEditName, 
      handleEditPhone, 
      handleReverseFavorit, 
      handleSave } = this;
      
    return(
      <PhoneDetail
        listName={listName}
        detail={detail}
        onEditName={handleEditName}
        onEditPhone={handleEditPhone}
        onReverseFavorit={handleReverseFavorit}
        onSave={handleSave}
      />
    );
  }
}

export default connect(

  (state) => ({
    detail: state.phone.detail

  }),
  (dispatch) => ({
    phoneActions: bindActionCreators(phoneActions, dispatch)
  })
)(PhoneDetailContainer);