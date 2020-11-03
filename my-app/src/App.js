import React from 'react';
import { Provider } from 'react-redux'
import store from "./app/store"
import Title from "./components/Title"
import QuoteBox from "./components/QuoteBox"

const App = () => (
  <Provider store ={store}>
    <main>
      <Title />
      <QuoteBox />
    </main>
  </Provider>
  
)

export default App;
