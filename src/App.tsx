import React from 'react'
import { Route, Switch } from 'react-router-dom'
// import ReactPDF from './ReactPDF';
const ReactPDF = React.lazy(
  () => import('./ReactPDF'),
);

const App = () => {
  return (
    <div>
       <Switch>
        <Route
          exact
          path='/'
          component={() => <ReactPDF />}
        />
       </Switch>
    </div>
  )
}

export default App;