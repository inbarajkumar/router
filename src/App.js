import React from 'react';
import { createBrowserRouter, createRoutesFromElements, Route, Link, Outlet, RouterProvider } from 'react-router-dom';
import Home from './Home';
import Data , {dataLoader} from './Data.jsx';
import Contact from './Contact';
import './App.css';

 export function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route index element={<Home />}/>
        <Route path="/data" element={<Data />} loader={dataLoader} />
        <Route  path="/contact" element={<Contact />}/>
      </Route>
    ))
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}
const Root = () => {
  return (
    <>
    <div>
      <Link to="/">Home</Link>
      <Link to="/data">Data</Link>
    </div>
    <div>
    <Outlet />
    </div> </>
  )

}


export default App;
