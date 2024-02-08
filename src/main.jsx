import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { FilterProvaider } from './context/filters.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <FilterProvaider>
    <App />
  </FilterProvaider>,
)
