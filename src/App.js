import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  let [글제목,글제목변경] = useState(['남자코트추천','강남 우동맛집','파이썬독학']);
  let [따봉, 따봉변경] = useState(0);
  let posts = '강남고기맛집'
  return (
    <div className="App">
        <div className='black-nav'>
          <div>개발 blog</div>
        </div>
        <div className='list'>
            <h3>{글제목[0]}<span onClick={()=>{따봉+1}}>👍</span>{따봉}</h3>
            
        </div>
    </div>

  );
}

export default App;
