import axios from "axios";
import React, { useEffect } from "react";
import { createContext } from "react";
import { useState } from "react";
import "./Provider.css"
{
  /* passing data to the consumer  by using creatingContext*/
}
export let data = createContext();

const ProviderFun = ({ children }) => {
  let [text, setText] = useState("")
  let [state, setState] = useState({});
  console.log(state);
  let handleSubmit = async (e) => {
    e.preventDefault()
     let data = await axios.get(
       `https://jsonplaceholder.typicode.com/users/${text}`
     );
     console.log(data.data);
     setState(data.data);
}
  return (
    <div className="content">
      <form action="" onSubmit={handleSubmit}>
        <input
          type="text"
          value={text}
          onChange={e => setText(e.target.value)}
        />
        <button>submit</button>
      </form>
{/* passing data to the consumer */}
      <data.Provider value={[state, setState,]}>
        {children}
      </data.Provider>
    </div>
  );
};

export default ProviderFun;
