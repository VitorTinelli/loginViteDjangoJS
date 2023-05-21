import React, { Children } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';

import View from './routes/view.jsx';
import Loginpage from './routes/loginpage.jsx';


import {createBrowserRouter, RouterProvider, Route} from 'react-router-dom'

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: '/',
        element: <Loginpage/>,
      },
      {
        path: '/view',
        element: <View/>,
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
