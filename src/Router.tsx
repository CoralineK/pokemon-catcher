import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Start from './pages/Start';
import Catching from './pages/Catching';

export default function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/pokemon-catcher/" component={Start} />
        <Route path="/pokemon-catcher/catching" component={Catching} />
      </Switch>
    </BrowserRouter>
  );
}
