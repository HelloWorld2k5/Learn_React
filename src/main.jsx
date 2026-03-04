import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import CartProvider from './exercises/context/CartContext.jsx'

console.log('HELLO EVERYONE, WELCOME TO MY REACT APP! HAPPY NEW YEAR 2026!');

// function emitComment(id) {
//   setInterval(() => {
//     window.dispatchEvent(new CustomEvent(`lesson-${id}`, {
//       detail: `Nội dung comment của lesson ${id}`
//     }));
//   }, 2000);
// }

// emitComment(1);
// emitComment(2);
// emitComment(3);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CartProvider>
      <App />
    </CartProvider>
  </StrictMode>,
)