import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Appp from './App.tsx'
import Test from './components/test.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Appp />
    <Test/>
  </StrictMode>,
)
