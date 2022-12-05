import React, { useState } from "react";
import { Button, ButtonGroup } from "@material-ui/core";
import './Student.css';
import styled from "styled-components";
import Recommendedactivities from "./Recommendedactivities";
  
export default function Student({id}) {
  const [active, setActive] = useState(types[0])
  let content;

  if(active === types[0]){
    content = <Recommendedactivities id = {id}/>;
  }else if(active === types[1]){
    //Calendar goes here
  }

  return (
    <>
    <div class="App-rightalign">
      <h5>Username goes here</h5>
    </div>
    <div style={{ display: "block", padding: 30 }}>
      <h4>Logo goes here</h4>
    </div>
    <div>
      <ButtonGroup className="App-ButtonGroup">
        {types.map(type => (<ButtonToggle key={type} active={active === type} onClick={() => setActive(type)}>{type}</ButtonToggle>))}
      </ButtonGroup>
      <div>
        {content}
      </div>
    </div>
    </>
  );
}

const types = ['Recommendation', 'Calendar'];

const ButtonToggle = styled(Button)`
  float: center;
  width: 50%;
  opacity: 0.4;
  ${({ active }) =>
    active &&
    `
    opacity: 1;
  `}
`;