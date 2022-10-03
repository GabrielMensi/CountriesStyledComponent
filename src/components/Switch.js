import React, { useState } from "react";
import { ButtonSwitch, SwitchBGC, SwitchContainer, SwitchWrapper } from "./SwitchComponents";


const Switch = (props) => {

  const [position, setPosition] = useState(false);

  const changeMode = () => {
    if(props.theme === 'ligth') {
      props.setTheme('dark');
      changePosition()
    } else {
      props.setTheme('ligth');
      changePosition();
    }
  }

  const changePosition = () => {
    setPosition(!position);
  }

  return (
    <>
      <SwitchContainer onClick={ () => changeMode()}>
        <SwitchWrapper>
          <SwitchBGC>
            <ButtonSwitch 
              position={position}></ButtonSwitch>
          </SwitchBGC>
        </SwitchWrapper>
      </SwitchContainer>
    </>
  )
}

export default Switch;