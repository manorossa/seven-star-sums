import React, { useContext } from 'react';
import CSSTransition from 'react-transition-group/CSSTransition';
import { AppState } from '../../types/types';
import StatusContext from '../../context/StatusContext';

const withAnimation = <P extends object>(
  WrappedComponent: React.ComponentType<P>,
  showStatus: AppState['gameStatus']
) => (props: P): JSX.Element => {
  const { gameStatus } = useContext(StatusContext);
  const show = gameStatus === showStatus;

  return (
    <CSSTransition mountOnEnter unmountOnExit in={show} timeout={1200} classNames="slide-anim">
      <WrappedComponent {...props} />
    </CSSTransition>
  );
};

export default withAnimation;
