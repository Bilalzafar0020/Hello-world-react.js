import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'
function Hello(){
  return  <main>
    <div>  
  <h1>Hello World <strong>Bilal zafar</strong></h1>
   <ul class='ul'>
    <li>a</li>
    <li>b</li>
    <li>c</li>
    <li>{15+5}</li>
   </ul>
  </div>

<div class='card'>

  <input type='text' placeholder='Title' class='title'></input>

 <textarea placeholder='Content' cols='60' rows='10' class='textarea'></textarea>

 <button class='button'>Publish </button>

</div>

</main>
}

ReactDOM.render(<Hello />, document.querySelector('#root'));