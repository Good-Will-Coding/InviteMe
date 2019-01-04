import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import reducer from "./reducers/index";
import { firebaseApp } from "./Firebase";
import { logUser } from "./actions/index";

firebaseApp.auth().onAuthStateChanged(user => {
  if (user) {
    // console.log("User has signed in or up", user);
    const { email } = user;
    store.dispatch(logUser(email));
  } else {
    // console.log("User has signed out or still needs to sign in");
  }
});

const store = createStore(reducer);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.querySelector("#root")
);
