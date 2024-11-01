import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from './App.jsx'
import {Home,Events} from "./Pages/index"
import './index.css'

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
          path: "/events",
          element: <Events />,
        },
      ]
    }
]);

createRoot(document.getElementById('root')).render(
        <RouterProvider router={router} />
)
