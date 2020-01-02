import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Company from './pages/Company';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Company} />
      </Switch>
    </BrowserRouter>
  );
}
