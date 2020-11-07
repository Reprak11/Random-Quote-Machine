import React from 'react';
import { Provider, connect } from 'react-redux'
import Title from "./components/Title"
import QuoteBox from "./components/QuoteBox"
import "./App.css"


const App = ({ colors, inde }) => (
    <main className={colors[inde]}>
      <Title />
      <QuoteBox />
    </main>
)

const mapStateToProps = state =>(
  {
      colors: state.colors,
      inde: state.inde
  }
)

export default connect(mapStateToProps)(App);
