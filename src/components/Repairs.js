import React from "react";
import { NavBar } from "./Nav/NavBar";
import { ApplicationViews } from "./ApplicationViews";
import { Route, Redirect } from "react-router-dom";
import { Login } from "./auth/Login";
import { Register } from "./auth/Register";



export const Repairs = () => (
    <>
      <Route
        render={() => {
          if (localStorage.getItem("honey_customer")) {
            return (
              <>
                <NavBar/>
                <h1>Honey Rae's Repair Shop</h1>
                <ApplicationViews/>
              </>
            );
          } else {
            return <Redirect to="/login" />;
          }
        }}
      />
  
      <Route path="/login">
        <Login />
      </Route>
      <Route path="/register">
        <Register />
      </Route>
    </>
  );



