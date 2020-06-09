import React from 'react';
import CSSTransition from "react-transition-group/CSSTransition";

const withAnimation = (WrappedComponent, showStatus) => (props) => {
  let show = props.gameStatus === showStatus ? true : false ;

  return (
      <CSSTransition 
      mountOnEnter 
      unmountOnExit 
      in={show} 
      timeout={1200}
      classNames="height-anim">
        <WrappedComponent {...props} />
      </CSSTransition>
  )
}

export default withAnimation