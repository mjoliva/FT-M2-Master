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