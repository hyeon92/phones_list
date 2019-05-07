import React from 'react';
import { Icon } from 'antd';

function Phone({name, tel, favorit}){
  return(
    <div>
      <Icon type="github" theme="filled" />
      <span>{name}</span>
      <div>
        <span>{tel}</span>
      </div>

      <Icon type="github" theme="filled" />
    </div>
  )
}

export default Phone;