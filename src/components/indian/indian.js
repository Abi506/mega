import React, { useReducer } from 'react';

const initialState = {
  width: window.innerWidth,
  height: 500,
};

const urlData = [
  {
    url: "https://drive.google.com/file/d/10FbVZjn0O6muJEDTelMh67lop563PkIy/preview",
    name:"Uma Devi Sarre best navel press (own)"
  },
  {   
    url: "https://drive.google.com/file/d/10TaAqH4XQ_D9JmA5AwRj5LWXwGAS-4-g/preview",
    name:"Aunty navel fucked in kitchen (own)"
  },
  {
    url: "https://drive.google.com/file/d/10MFvWEIz4NT8xIT2V_Q369R9N63dMD79/preview",
    name:"Young Uma Devi romance in bedrom (own)"
  },
  {
    url: "https://drive.google.com/file/d/10ebPG7c4_C_Bn-DQPYdKIInHmhJ78QhI/preview",
    name:"Marathi aunty navel in public bus"
  },
  {
    url: "https://mega.nz/embed/QfE3iSyS#Hb-3s35Q8htVgVVCMTcBOHFJSdOeEMBpxPanNmg1D58"
  },
  {
    url: "https://mega.nz/embed/VOcVmSxQ#b0EwCPNS_owy2rkWRmJSUmv6N5mHI3LzJVTMnSVFE3w"
  },
];

const reducer = (state, action) => {
  switch (action.type) {
    case 'incrementWidth':
      return { ...state, width: state.width + 50 };
    case 'decrementWidth':
      return { ...state, width: state.width - 50 };
    case 'incrementHeight':
      return { ...state, height: state.height + 50 };
    case 'decrementHeight':
      return { ...state, height: state.height - 50 };
    default:
      return state;
  }
};

const Indian = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const increasedWidth = () => {
    dispatch({ type: 'incrementWidth' });
  };

  const decreasedWidth = () => {
    dispatch({ type: 'decrementWidth' });
  };

  const increasedHeight = () => {
    dispatch({ type: 'incrementHeight' });
  };

  const decreasedHeight = () => {
    dispatch({ type: 'decrementHeight' });
  };

  return (
    <ul>
      <h1>Indian</h1>
      <a href='/'><button>Japanese</button></a>
      <a href='/korean'><button>Drive Korean </button></a>
      {urlData.map((each, index) => {
        return (
          <li key={index}>
            {each.name && ( <h1>{each.name}</h1>)}
            <div>
              <p>Width: {state.width}px</p>
              <p>Height: {state.height}px</p>
              <button onClick={increasedWidth}>Increase Width</button>
              <button onClick={decreasedWidth}>Decrease Width</button>
              <button onClick={increasedHeight}>Increase Height</button>
              <button onClick={decreasedHeight}>Decrease Height</button>
            </div>
            <div>
              {each.url && (
                <iframe
                  width={state.width}
                  height={state.height}
                  src={each.url}
                  allowFullScreen
                ></iframe>
              )}
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export default Indian;
