import React from 'react'
import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../styles/index.css'


import SecondsCounter from './components/SecondsCounter.jsx'


let segundos = 0

setInterval(() => {
  ReactDOM.createRoot(document.getElementById('root')).render(
      <SecondsCounter segundos={segundos} enCuentaRegresiva={true} />
  )
  segundos++
}, 1000)
