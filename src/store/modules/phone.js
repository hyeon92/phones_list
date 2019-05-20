import { createAction, handleActions } from 'redux-actions';

//액션 타입 정의
const GETLIST = 'phoneList/GETLIST';
const REVERSEFAVORIT = 'phoneList/REVERSEFAVORIT';
const DELETE = 'phoneList/DELETE';

const GETDATA = 'phoneDetail/GETDATA';
const EDITNAME = 'phoneDetail/EDITNAME';
const EDITPHONE = 'phoneDetail/EDITPHONE';
const EDITFAVORIT = 'phoneDetail/REVERSEFAVORIT';
const SAVE = 'phoneDetail/SAVE';

//액션 생성 함수 만들기
export const getList = createAction(GETLIST);
export const reverseFavorit = createAction(REVERSEFAVORIT);
export const del = createAction(DELETE);

export const getData = createAction(GETDATA);
export const editName = createAction(EDITNAME);
export const editPhone = createAction(EDITPHONE);
export const editFavorit = createAction(EDITFAVORIT);
export const save = createAction(SAVE);

//모듈 초기상태 정의
const initialState = {
  list:[
    {
      id: 1,
      name: 'S.Ramos',
      phone: '010-2222-2222',
      favorit: false
    },
    {
      id: 2,
      name: 'Son',
      phone: '010-3333-2222',
      favorit: false
    },
    {
      id: 3,
      name: 'D.Drogba',
      phone: '010-5555-2222',
      favorit: false
    },
    {
      id: 4,
      name: 'De Gea',
      phone: '010-2335-2222',
      favorit: true
    },
    {
      id: 5,
      name: 'David Luis',
      phone: '010-2335-2113',
      favorit: false
    },
    {
      id: 6,
      name: 'Kante',
      phone: '010-2311-2222',
      favorit: false
    }
  ],
  detail:{}
};

export default handleActions({

  //get List
  [GETLIST]: (state= initialState) => {

    return state;

  },

  //리스트 즐겨찾기 on/off
  [REVERSEFAVORIT]: (state, action) => {

    const key = action.payload;
    let phones = state.list;

    phones = phones.map(
      info => info.id === key ? {...info, favorit: !info.favorit} : info
    )
    
    return {list:phones};
  },

  //삭제
  [DELETE]: (state, action) => {

    const key = action.payload;
    let phones = state.list;

    phones = phones.filter(item => item.id !== key);
    return {list:phones};
  },

  //get item
  [GETDATA] : (state, action) => {
    const key = action.payload;

    let info = state.list.filter(item => item.id === key);

    return {
      ...state,
      detail: info[0]
    };
  },

  // edit Name
  [EDITNAME] : (state, action) => {
    return {...state, detail:{ ...state.detail, name: action.payload}}
  },

  //edit Phone
  [EDITPHONE] : (state, action) => {

    const reg = /^-?(0|[1-9][0-9]*)([0-9-]*)?$/;

    const value = action.payload;
    if ((!Number.isNaN(value) && reg.test(value)))
      return {...state, detail:{ ...state.detail, phone: action.payload}}
    else
      return {...state}
  },

  //Detail 즐겨찾기 on/off
  [EDITFAVORIT] : state => {
    
    return {...state, detail:{ ...state.detail, favorit: !state.detail.favorit}}
  },

  //Detail 정보 저장
  [SAVE] : (state= initialState, action) => {

    let key = state.detail.id;

    if(!key){
      key = state.list[state.list.length-1].id+1;
    }

    const findValue = state.list.filter(item => item.id === key);

    if(findValue.length > 0){
      //update
      return {
        list: state.list.map(
          info => info.id === key ? 
            {...info, 
              name: state.detail.name, 
              phone: state.detail.phone, 
              favorit: state.detail.favorit} : info
        ),
        detail:{}
      }
    }else{
      //add
      state.detail.id = key;

      state.list.push(state.detail);
    
      return {...state, detail:{}}

    }
  }

}, initialState);