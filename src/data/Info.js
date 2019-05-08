class Info {
  constructor(){
    this.information = [
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
    ];
  }

  //get data
  _getInfomation = () => {
    return this.information;
  }

  //즐겨찾기 on/off
  _reverfavorit = id => {

    this.information = this.information.map(
      info => info.id === id ? {...info, favorit: !info.favorit} : info
    )

    return this._getInfomation();
  }

  //데이터 삭제
  _delInfomation = id => {
    this.information = this.information.filter(phones => phones.id !== id);
    
    return this._getInfomation();
  }
}

export default Info;
