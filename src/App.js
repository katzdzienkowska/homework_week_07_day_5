import React from 'react';
import RedditContainer from "./containers/RedditContainer";
import './App.css'

function App() {
  return (
    <section className='app'>
      <h1>Search Reddit Topics</h1>
      <RedditContainer />
    </section>
  );
}

export default App;
