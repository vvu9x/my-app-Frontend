import React from 'react';
import { Provider } from "react-redux";
import store from "./redux/store";
import AddBook from "./components/AddBook";
import BookList from "./components/BookList";
import './App.css'

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>Book library</h1>
        <AddBook />
        <BookList />
      </div>
    </Provider>
  );
}


export default App;
