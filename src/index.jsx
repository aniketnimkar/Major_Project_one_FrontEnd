import React from 'react'
import ReactDOM from 'react-dom/client'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.min.js"
import ProductListing from "./pages/ProductListing";
import App from './App'
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import Cart from './pages/Cart';

const router = createBrowserRouter([
	{
		path: "/",
		element: <App/>
	},
	{
		path: "/productListing",
		element: <ProductListing/>
	},
	{
		path: "/cart",
		element: <Cart/>
	},
	{
		path: "/cart",
		element: <Cart/>
	}
])


ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
)