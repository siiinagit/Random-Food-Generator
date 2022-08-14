import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import FoodContextProvider from "./foodContext";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <FoodContextProvider>
       <App />
    </FoodContextProvider>
     
    
    
  </React.StrictMode>
);


