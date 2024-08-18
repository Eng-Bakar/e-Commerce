import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Header from './Components/Header'
import ProductList from './Components/ProductList'
import Store from './Redux/Store/store'
import {Provider} from 'react-redux'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import { persistStore } from 'redux-persist'
import { PersistGate } from 'redux-persist/integration/react'

const StorePersistor = persistStore(Store)
ReactDOM.createRoot(document.getElementById('root')).render(
  <PersistGate persistor={StorePersistor}>
    <Provider store={Store}>  {/* store ka hore waa function waana must*/}
    <BrowserRouter>
      <App />
      
    </BrowserRouter>
      {/* <Header /> */}
    </Provider>
</PersistGate>


)
