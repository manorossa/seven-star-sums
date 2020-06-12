import React from 'react';
import CSSTransition from "react-transition-group/CSSTransition";
import { GameStates } from '../../containers/App/App';

interface WrappedProps {
  gameStatus: GameStates;
}

const withAnimation = <P extends object>(WrappedComponent: React.FC<P>, showStatus: GameStates) => (props: P & WrappedProps) => {
  let show = props.gameStatus === showStatus ? true : false ;

  return (
      <CSSTransition 
      mountOnEnter 
      unmountOnExit 
      in={show} 
      timeout={1200}
      classNames="slide-anim">
        <WrappedComponent {...props} />
      </CSSTransition>
  )
}

export default withAnimation