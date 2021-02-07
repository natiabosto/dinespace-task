import React from 'react';
import './App.css';
import styled from 'styled-components'

import { Reservation, Filter } from './components'

const Wrapper = styled.div`
  width: 100vw;
  padding: 10vh 15px 15px 15px;
  background-color: #efefefef;
  height: 100vh;

  .content__container {
    max-width: 400px;
    margin: 0 auto;
    background-color: #ffffff;
    border-radius: 2px;
    min-height: 400px;
    padding: 100px 48px;
    // position: relative;
  }
`

function App() {
  return (
    <Wrapper>
      <div className="content__container">
        <Reservation />
        <Filter />
      </div>
    </Wrapper>
  );
}

export default App;
