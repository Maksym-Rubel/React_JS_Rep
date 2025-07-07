import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { CounterProvider } from './contexts/counter.context.jsx'
import { CounterImportantProvider } from './contexts/counter.importante.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CounterImportantProvider>
      <CounterProvider>
        <App />
      </CounterProvider>
    </CounterImportantProvider>
  </StrictMode>,
)
