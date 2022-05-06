import React, { createContext, useState } from "react";


export let store = createContext();
const ProviderFun = ({ children }) => {
  let [state, setState] = useState(0);

  return (
    <div>
      <store.Provider value={[state, setState]}>
        {children}
        <button onClick={() => setState(state + 1)}>Clickme1</button>
        <button
          onClick={() => {
            if (state > 0) {
              setState(state - 1);
            }
          }}
        >
          Clickme2
        </button>
        <button onClick={() => setState(0)}>Clickme3</button>
      </store.Provider>
    </div>
  );
};

export default ProviderFun;
