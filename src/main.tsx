import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from '@components/App.tsx'
import s_ from '@styles/App.module.less'
import '@global/index.global.less'


const root = document.createElement('div')
root.className = s_.root
document.body.append(root)

createRoot(root).render(
  <StrictMode>
    <App/>
  </StrictMode>,
)
