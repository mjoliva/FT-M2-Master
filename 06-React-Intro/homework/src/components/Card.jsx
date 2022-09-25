export default function Card(props){
  function onClose(){
    return alert(props.name)
  }
  
  function addDegrees(temp){
    return temp + "°"
  }
  
  return (
    <div>
      <button onClick={onClose}> X </button>
      <div> 
        <h2> {props.name} </h2>
      </div>
      <div>
        <h3> Min </h3>
        <h3> {addDegrees(props.min)} </h3>
      </div>
      <div>
        <h3> Max </h3>
        <h3> {addDegrees(props.max)} </h3>
        </div>
        <div>
          <img src={`http://openweathermap.org/img/wn/${props.img}@2x.png`} alt="logo clima" />
        </div>
      </div>
    )
}
/*
  import React from 'react';

  export default class Card extends React.Component{
    constructor(props){
      super(props)
      // this.onClose = this.onClose.bind(this)
    }
    
    addDegrees(temp){
      return temp + "°"
    }
    
    onClose = () => {
      return alert(this.props.name)
    }
    
    render(){
      return (
        <div>
          <button onClick={()=>{this.props.onClose}}> X </button>
          <div> 
            <h2> {this.props.name} </h2>
          </div>
          <div>
            <h3> Min </h3>
            <h3> {this.addDegrees(this.props.min)} </h3>
          </div>
          <div>
            <h3> Max </h3>
            <h3> {this.addDegrees(this.props.max)} </h3>
            </div>
            <div>
              <img src={`http://openweathermap.org/img/wn/${this.props.img}@2x.png`} alt="logo clima" />
            </div>
          </div>
        )
    }
  };
*/