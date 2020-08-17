import React, { Component } from 'react';

export default class Loader extends Component {
 
   
  
  //========================Preparation du rendu========================
  render(){
     // console.log("this.state", this.state);

    return (
      <div style = {{
        border: "16px solid #f3f3f3",
        borderRadius: "50%",
        borderTop: "16px solid #3498db",
        width: "120px",
        height: "120px",
        //-webkit-animation: spin 2s linear infinite; /* Safari */
        animation: "spin 2s linear infinite" 
      }}>
      </div>
    );
  }
}


