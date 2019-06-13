import React, { Component } from 'react';

// class App extends React.Component {
//   render () {
//     return (
//       <div>hellow 11</div>
//     )
//   }
// }

// const App = function () {
//   return (
//     <div>函数式语法</div>
//   )
// }

// const App = () => {
//   return (
//     <div>箭头函数</div>
//   )
// }
// const App = () => (<div>简写</div>)

class App extends Component {
  constructor (props) {
    super(props);
    this.state = {
      // msg: 'state',
      list: [
        {
          brand: '康师傅',
          data: ['老坛酸菜', '红烧牛肉', '鲜虾鱼板面']
        },
        {
          brand: '统一',
          data: ['腾蛟牛肉', '葱爆牛肉', '排骨面']
        }
      ],
      flag: true
    }
  }

  btnClickFn (id) {
    console.log(id,this.state)
  }

  render () {
    return (
      <div>
        <button onClick = { this.btnClickFn.bind(this,1) }>点击事件</button>
      </div>
    )
    // let arr = [];
    // this.state.list.map((item, index) => {
    //   arr.push(<li key = { index }>{ item.brand }</li>)
    //   item.data.map((itm, inx) => {
    //     arr.push(<ul><li key = { inx }> { itm } </li></ul>)
    //   })
    // })
    // return (
    //   // <h1> { this.state.msg } </h1>
    //   <ul>
    //     { arr }
    //   </ul>
    // )
    // if (this.state.flag) {
    //   return (
    //     <h1>为真显示</h1>
    //   )
    // } else {
    //   return (
    //     <h1>为假显示</h1>
    //   )
    // }
    // let arr = [];
    // this.state.list.map((item,index) => {
    //   let itemArr = [];
    //   item.data.map((itm,inx) => {
    //     itemArr.push(<li key = { inx } > { itm } </li>)
    //   })
    //   let oli = <li key = { index } > { item.brand }  <ul> { itemArr } </ul> </li>
    //   arr.push(oli)
    // })

    // return (
    //   <ul>
    //     { arr }
    //   </ul>
    // )
  }
}

export default App;
