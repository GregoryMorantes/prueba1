import React from 'react';
import Header from "./components/Header";
import Search from "./components/Search";

//Redux
import { Provider } from 'react-redux';
import store from './store';
import List from './components/LIst';

function App() {
  return (
    <Provider store={store}>
      <div className="container-fluid px-0">
        <Header />
        <Search />
        <List />
      </div>
    </Provider>
  );
}

export default App;
