import React, { useState } from 'react';
import Header from "./components/Header";
import Search from "./components/Search";
import List from './components/LIst';
import User from './components/User';

//Redux
import { Provider } from 'react-redux';
import store from './store';

function App() {

  const [details, setDetails] = useState({})

  store.subscribe(() => {
		setDetails(store.getState().InfoUser);
	})

  return (
    <Provider store={store}>
      <div className="container-fluid px-0">
        <div className="row">
          <Header />
          {Object.entries(details).length > 0 ? (
            <div className="col-12">
                <User />
            </div>
          )
          : (
            <>
              <div className="col-6">
                <Search /> 
              </div>
              <div className="col-6">
                <List />
              </div>
            </>
          )}
        </div>
      </div>
    </Provider>
  );
}

export default App;
