var Info = (function() {
  var instance;
  let information = [
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
  
  function init(){
    return{
      information: information,

      //get all data
      getList : () => {
        return information;
      },

      //즐겨찾기 on된 리스트만 들고오기
      getFavoritList: () => {
        const list = information.filter(item => item.favorit === true);

        return list;
      },

      //get 1 data
      getItem : id => {
        const info = information.filter(item => item.id === id);

        return info[0];
      },

      //즐겨찾기 on/off
      reverfavorit : id => {

        information = information.map(
          info => info.id === id ? {...info, favorit: !info.favorit} : info
        )

        return information;
      },

      //데이터 삭제
      delInfomation : id => {
        information = information.filter(item => item.id !== id);
        
        return information;
      },

      //데이터 수정
      modiInfomation : item => {
        information = information.map(
          info => info.id === item.id ? {...info, name: item.name, phone: item.phone, favorit: item.favorit} : info
        )
      },

      //마지막 id 찾기
      getLastId : () =>{
        var max = information.reduce( function (previous, current) { 
          return previous.id > current.id ? previous.id : current.id;
        });

        return max;
      },

      //데이터 추가
      addInformation : item => {
        information.push(item);
      }
    };
  }
  return {
    getInstance: () => {
      if(!instance){
        instance = init();
      }
      return instance;
    }
  }
  
})();

export default Info;