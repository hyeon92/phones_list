import React from 'react';
import { Link } from 'react-router-dom';
import { Input, Checkbox, Button } from 'antd';

const PhoneDetail = ({
  listName,
  detail,
  onEditName, 
  onEditPhone,
  onReverseFavorit,
  onSave}) => {

    if(!detail){
      detail = {
        id: 0,
        name : null,
        phone: null,
        favorit: false
      };
    }

  return(
    <div>
      <Input 
        placeholder="Name"
        value={detail.name}
        onChange={onEditName}
      />
      <Input 
        placeholder="Phone Number"
        value={detail.phone}
        onChange={onEditPhone}
      />
      <h1></h1>
      <Checkbox 
        checked={detail.favorit}
        onChange={onReverseFavorit}
      >즐겨찾기</Checkbox>
      <h1></h1>
      <Link to={`/${listName}`}>
      <Button 
        block type="primary"
        onClick={onSave}
      >Save</Button>
      </Link>
    </div>
  )
}

export default PhoneDetail;