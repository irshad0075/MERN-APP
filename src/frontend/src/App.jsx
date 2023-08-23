import React, { useContext, useState } from "react";
import Admin from "./Admin";
import User from "./User";
import Guest from "./Guest";
import { GlobalContext } from "./Context/context";
import { decodeToken } from "react-jwt";

export const AppRoute = "/";

const ComponentByRoles = {
  admin: Admin,
  user: User,
  guest: Guest,
};

const getUserRole = (params) =>
  ComponentByRoles[params] || ComponentByRoles["guest"];

const decodeUser = (token) => {
  if (!token) {
    return undefined;
  } else {
    const res = decodeToken(token);
    return res?.role;
  }
};

export default function App() {
  const { state } = useContext(GlobalContext);
  const [role, setRole] = useState(decodeUser(state.token) || "guest");
  const CurrentUser = getUserRole(role);

  return <CurrentUser />;
}
