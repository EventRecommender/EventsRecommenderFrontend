import React, { useState } from "react";
import { Button, ButtonGroup } from "@material-ui/core";
import styled from "styled-components";

export default function Organizer() {
    const [active, setActive] = useState(types[0])
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
          <h1>Activities goes here</h1>
        </div>
      </div>
      </>
    );
  };

  const types = ["Created Events", "Create Events"];

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