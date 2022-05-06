import React, { useContext } from "react";
import { data } from "./Provider";
import { useEffect } from "react";
import { useState } from "react";

const Users = () => {
  // consuming data from the provider
  let [state, setState] = useContext(data);

  return <div>{<h1>{state.name}</h1>}</div>;
};

export default Users;
