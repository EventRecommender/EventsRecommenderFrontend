import React, {useState} from "react";
import styled from "styled-components";
import Userlist from "./Userlist";
import Activitylist from "./Activitylist";
import './Admin.css';

//This is the admin page component
function Admin({token, area}) {

    //This is the what controls the button states.
    const [active, setActive] = useState(types[0])

    //The content is what is being displayed
    let content;

    //This if decides what to display, based on the button state.
    if(active === types[0]){
        content = <Userlist token = {token}/>
    }else if(active === types[1]){
        content = <Activitylist area = {area} />;
    };

    //The html code of the admin component.
    return (
      <>
      <div className="App-rightalign">
        <h5>Admin page</h5>
      </div>
      <div style={{ display: "block", padding: 30 }}>
        <h4>Logo goes here</h4>
      </div>
      <div>
        <ButtonGroup data-testid="ButtonGroupA" className="App-ButtonGroup">
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

  const Button = styled.button`background-color: black;
  color: white;
  font-size: 20px;
  padding: 10px 60px;
  border-radius: 5px;
  margin: 10px 0px;
  cursor: pointer;
  &:disabled {
    color: grey;
    opacity: 0.7;
    cursor: default;
  }`;

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