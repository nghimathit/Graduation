
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import ModalProvider from './Context/ModalProvider.jsx'

createRoot(document.getElementById('root')).render(
 <ModalProvider>
    <App />
 </ModalProvider>
)
