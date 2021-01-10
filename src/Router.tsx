import React from "react"
import { BrowserRouter, Switch, Route } from "react-router-dom"
import Start from "./pages/Start"
import Welcome from "./pages/Welcome"

export default function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Start} />
        <Route path="/welcome" component={Welcome} />
      </Switch>
    </BrowserRouter>
  )
}
