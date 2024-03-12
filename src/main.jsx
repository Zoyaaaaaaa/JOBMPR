import React from 'react';
import ReactDOM from 'react-dom';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'; // Importing createBrowserRouter and RouterProvider
import Login from "./pages/Login";
import {app,auth,firestore} from "./firebaseConfig"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Register from './pages/Register';
import Home from './pages/Home';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login/>,
  },
  {
    path: "/register",
    element: <Register/>,
  },
  {
    path: "/home",
    element: <Home/>,
  },

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    
    <RouterProvider router={router}>
    </RouterProvider>
    <ToastContainer/>
  </React.StrictMode>
);
