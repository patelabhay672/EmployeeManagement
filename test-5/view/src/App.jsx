import React from 'react';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import Navbar from './components/Navigation';
import Member from './components/Member';
import Home from './components/Home';
import AddEmployee from './components/addEmployee';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import UpdateEmployee from './components/UpdateEmployee';
const App = () => {

  const router=createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <Navbar/>
          <Home/>
        </>
      ),
    },
    {
      path: "/update/:id", // Add dynamic id parameter to the route
      element: (
        <>
          <Navbar />
          <UpdateEmployee />
        </>
      ),
    },
    
    {
      path: "/signin",
      element: (
        <>
          <Navbar />
          <SignIn/>
        </>
      ),
    },
    {
      path: "signup",
      element: (
        <>
          <Navbar/>
          <SignUp/>
        </>
      ),
    },
    {
      path: "add",
      element: (
        <>
          <Navbar/>
          <AddEmployee/>
        </>
      ),
    },
    {
      path: "showemp",
      element: (
        <>
          <Navbar/>
          <Member/>
        </>
      ),
    },
  ])
  return <RouterProvider router={router} />;
}

export default App;
