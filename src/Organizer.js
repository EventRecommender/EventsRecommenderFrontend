import React, { useState } from "react";
import styled from "styled-components";
import CreateActivity from "./CreateActivity";
import CreatedActivities from "./CreatedActivities";

export default function Organizer({id}) {
    const [active, setActive] = useState(types[0])

    let content;

    if(active === types[0]){
        content = <CreatedActivities id = {id}/>
    }else if(active === types[1]){
        content = <CreateActivity />;
    };
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
  };

  const types = ["Created Events", "Create Events"];

  const Button = styled.Button;
  
  const ButtonToggle = styled(Button)`
  float: center;
  width: 50%;
  opacity: 0.4;
  ${({ active }) =>
    active &&
    `
    opacity: 1;
  `}`;

  const ButtonGroup = styled.div`display: flex`;