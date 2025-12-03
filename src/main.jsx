import React from 'react'
import ReactDOM from 'react-dom/client'
import { Titulo } from './Titulo.jsx'
import { Header } from './Header.jsx'
import { Content } from './Content.jsx'
import './index.css'


const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
  <>
    <body>
      <Header />
      <Titulo />
      <div className="flex flex-col justify-center gap-10">
        <Content />
      </div>
    </body>
  </>
)
