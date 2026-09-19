import React from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

const anotherUser = "Jake"

const ReactElement = React.createElement(
  'a',
  {
    href: 'https://google.com',
    target: '_blank'
  },
  'Click here ',
  anotherUser
)

createRoot(document.getElementById('root')).render(
  <App />
)