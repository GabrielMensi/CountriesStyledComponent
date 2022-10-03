import React from "react";
import darkImg from '../Assets/darkmode.png';
import ligthImg from '../Assets/ligthmode.png';

export function ThemeImg(props){

  const icono = props.theme === 'ligth' ? ligthImg : darkImg;

  return (
    <div>
      <img src={icono} alt='theme-icon' className={icono === darkImg ? 'invert' : null }></img>
    </div>
  )
}