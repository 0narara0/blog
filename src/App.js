/* eslint-disable */

import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';


// funtion App(){} -> 이것도 일종의 Component
// Component 만들 때 funtion App(){}과 위치를 나란히 만들면 된다.
// Component 만들어 두면 관리가 편하다
// 어떤 것을 Component로 만들어 두면 좋을까? - 반복적으로 출현하는 HTML덩어리들
//                                         - 자주 변경되는 HTML UI들                                          
//                                         - 다른 페이지 만들 때도 컴포넌트로 만듦 

// Component 단점
// -state쓸 때 복잡해짐
// (상위 component에서 만든 state쓰려면 props문법 이용해야 함)
 
function App() {

  let [글제목, 글제목변경] = useState(['남자 코트 추천', '강남 우동 맛집', '우리 동네 맛집']);
  let [따봉, 따봉변경] = useState(0);
  let posts = '강남 고기 맛집';


  /* function 제목바꾸기() {
    var newArray = [...글제목]; // 수정된[데이터]를 deep copy해서 수정, deep copy: 값공유X, 서로 독립적인 값을 가지는 복사
    newArray[0] = '여자 코트 추천';
    글제목변경(newArray);
  }

  function 제목순서바꾸기() {
    var newArray1 = [...글제목];
    newArray1 = newArray1.reverse();
    글제목변경(newArray1);
  } */

  return (
    <div className="App">
      <div className="black-nav">
        <div>개발 Blog</div>
      </div>
      <div className="list">
        {/* <button onClick={제목바꾸기}> 제목 바꾸기 </button>
        <button onClick={제목순서바꾸기}> 제목 순서 바꾸기 </button> */}

        <h3> {글제목[0]} <span onClick={() => { 따봉변경(따봉 + 1) }}> 👍 </span> {따봉} </h3>
        <p> 2월 17일 발행 </p>
        <hr />
        <h3> {글제목[1]} </h3>
        <p> 2월 18일 발행 </p>
        <hr />
        <h3> {글제목[2]} </h3>
        <p> 2월 19일 발행 </p>
        <hr />
      </div>

      <Modal />


    </div>
  );
}


/* Modal ui 디자인하기 */
/* Component 만드는 법
  1. 함수 만들고 이름짓고
  2. 축약을 원하는 HTML 넣고
  3. 원하는 곳에서 <함수명 />
  함수 이름은 관습적으로 대문자로 시작
  return()안에 있는 것은 태그하나로 묶어야함. div태그 나란히 X, 
  한div 태그로 묶어야 함, 아니면<></>로 묶는다 */

function Modal() {
  return (
    <div className="modal">
      <h2>제목</h2>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  )
}

export default App;
