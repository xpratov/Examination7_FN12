import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Women from './pages/Women'
import Header from './components/Header'
import { Provider } from 'react-redux'
import store from './redux/store'

const App = () => {
  return (
  <Provider store={store}>
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/women' Component={Women}></Route>
      </Routes>
    </BrowserRouter>
  </Provider>
  )
}

export default App
