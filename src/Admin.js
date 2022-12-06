import React, {useState} from "react";
import styled from "styled-components";
import Userlist from "./Userlist";
import Activitylist from "./Activitylist";
import './Admin.css';

//This is the admin page component
function Admin({id}) {

    //This is the what controls the button states.
    const [active, setActive] = useState(types[0])

    //The content is what is being displayed
    let content;

    //This if decides what to display, based on the button state.
    if(active === types[0]){
        content = <Userlist/>
    }else if(active === types[1]){
        content = <Activitylist />;
    };

    //The html code of the admin component.
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

  const types = ["Users", "Activities"];

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
  
export default Admin;