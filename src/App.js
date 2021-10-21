import React, { useState } from 'react';
import Header from "./components/Header";
import Search from "./components/Search";

//Redux
import { Provider } from 'react-redux';
import store from './store';
import List from './components/LIst';
import User from './components/User';

function App() {

  const [details, setDetails] = useState({})

  store.subscribe(() => {
		setDetails(store.getState().InfoUser);
	})

  return (
    <Provider store={store}>
      <div className="container-fluid px-0">
        <Header />
        {Object.entries(details).length > 0 ? <User />
        :  (
          <>
          <Search /> <List />
          </>
        )
         }
        
        
        
      </div>
    </Provider>
  );
}

export default App;
