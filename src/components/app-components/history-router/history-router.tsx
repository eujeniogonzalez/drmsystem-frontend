import React from 'react';
import { useState, useLayoutEffect } from 'react';
import { Router } from 'react-router-dom';
import { BrowserHistory } from 'history';

type HistoryRouterPropsType = {
  history: BrowserHistory,
  basename?: string,
  children?: React.ReactNode
};

function HistoryRouter({ basename, children, history }: HistoryRouterPropsType) {
  const [state, setState] = useState({
    action: history.action,
    location: history.location,
  });

  useLayoutEffect(() => history.listen(setState), [history]);

  return (
    <Router
      basename={basename}
      location={state.location}
      navigationType={state.action}
      navigator={history}
    >
      {children}
    </Router>
  );
}

export default HistoryRouter;
