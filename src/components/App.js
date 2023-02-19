import React from 'react'
import '../styles/App.css';
const App = () => {
  consthandleInput=(event) =>{
    console.log(`Input in #${event.target.id} is ${event.targe.value}`);
  }


  return (
    <div id="main">
      <form>
        <label htmlFor='name'>Name</label>
        <input id="name" onchange={handleInput} type={"text"} />

        <br />
        <br />
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}


export default App;
