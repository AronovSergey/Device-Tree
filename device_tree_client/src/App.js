import React from "react";
import Layout from "./UI/Layout";

//router
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Main from "./pages/main";

// Redux
import { Provider } from "react-redux";
import store from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Layout>
          <Switch>
            <Redirect from="/" exact to="/main" />
            <Route path="/main" exact component={Main} />
          </Switch>
        </Layout>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
