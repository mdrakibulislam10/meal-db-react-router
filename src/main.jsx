import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Restaurant from './components/Restaurant/Restaurant';
import ErrorPage from './components/ErrorPage/ErrorPage';
import Home from './components/Home/Home';
import FoodDetails from './components/FoodDetails/FoodDetails';
import Cart from './components/Cart/Cart';
import Dashboard from './components/Dashboard/Dashboard';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/restaurant",
        loader: async () => fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=fish"),
        element: <Restaurant />,
      },
      {
        path: "/food/:idMeal",
        loader: async ({ params }) => fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${params.idMeal}`),
        element: <FoodDetails />
      },
      {
        path: "/food/cart/:idMeal",
        loader: ({ params }) => fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${params.idMeal}`),
        element: <Cart />
      },
      {
        path: "/dashboard",
        loader: async () => fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=fish"),
        element: <Dashboard />,
      },
      {
        path: "*",
        element: <ErrorPage />,
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
