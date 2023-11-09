import React from "react";
import Home from "./pages/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Product from "./components/Product";
import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
  ScrollRestoration,
} from "react-router-dom";
import Cart from "./pages/Cart";
import { productsData } from "./api/Api";

//Layout For the header and footer
const Layout = () => {
  return(
    <div>
      <Header/>
      <Outlet/>
      <Footer/>
    </div>
  )
}

//Parent element (header and footer); children element (home [{banner & products}] and cart)
const router = createBrowserRouter([
  {
    path:"/",
    element:<Layout/>,
    children:[
      {
        path:"/",
        element: <Home/>,
        loader: productsData
      },
      {
        path:"/product/:id",
        element:<Product/>
      },
      {
        path:"/cart",
        element: <Cart/>,
      },
    ]
  }
])

function App() {
  return (
    <div className="font-bodyFont">
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
