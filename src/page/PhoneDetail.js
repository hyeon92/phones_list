import React, { Component } from 'react';
import { Input, Switch, Button } from 'antd';

class PhoneDetail extends Component{
  render(){
    return(
      <div>
        <Input placeholder="Name" />
        <Input placeholder="Phone Number" />
        <Switch />
        <Button type="primary" block>Primary</Button>
      </div>
    )
  }
}
export default PhoneDetail;