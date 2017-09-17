import React from 'react';

import Login from '/login';

export default class App extends React.Component{
  render(){

    return(
      <div style={{height:"100%", width:"100%",background:"#333", overflow:"hidden"}}>
        <div>
          <Login/>
        </div>
      </div>
    )
  }
}
