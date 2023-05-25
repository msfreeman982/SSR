import styles from "./Button.module.css";
import React, { MouseEventHandler, CSSProperties } from 'react';
import arrow from "./img/arrow.svg"

type Props = {
  backgroundColor?: any;
  title?: string,
  withArrow?: boolean,
  disabled?: boolean,
  onClick?: MouseEventHandler<HTMLElement>,
  minWidth?: CSSProperties['minWidth'],
  styleButton?: {
    fontSize?: CSSProperties['fontSize'],
    fontColor?: string,
    backgroundColor?: string,
  };
  className?: string,
}

const Button: React.FC<Props> = (props) => {

  const stylesButton = { fontSize: props.styleButton?.fontSize, color: props.styleButton?.fontColor};
  const stylesButtonContainer = { 
    backgroundColor: props.disabled ? "#D4D4D4" : props.styleButton?.backgroundColor || "",
    minWidth: props.minWidth ? props.minWidth : ""
  };

  if (!props.title) {
    return null;
  }

  return (
    <button style={stylesButtonContainer} disabled={props.disabled} onClick={props.onClick} className={`${styles.button} ${props.className}`}>
      <div style={stylesButton} className={styles.button__text}>{props.title}</div>
      {props.withArrow &&<img className={styles.button__icon} src={arrow} alt="arrow"/>}
    </button>
  )
}
export default Button;
