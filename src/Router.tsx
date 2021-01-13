import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Start from './pages/Start';
import Catching from './pages/Catching';

export default function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Start} />
        <Route path="/catching" component={Catching} />
      </Switch>
    </BrowserRouter>
  );
}
