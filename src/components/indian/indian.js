import React, { useReducer } from 'react';

const initialState = {
  width: 1000,  // Width and height as numbers, not strings
  height: 500,
};


const urlData = [
  {
    url: "https://mega.nz/embed/BPMjVABL#5i6oXZn8Z2JSfRo3E8fsaxbG4Cr5nMfFoELCa5pPfXE"
  },
  {   
    url: "https://mega.nz/embed/YPESnLaI#UdojSY12cNbiX1jxJTGr2RpcMSZ4k79UQ2Sdd6cjINw"
  },
  {
    url: "https://mega.nz/embed/5SNE1BKZ#yBX5zSQ79tmzI4z3HRx7uxSwxwqMpU2zoXPjA8MgAiM"
  },
  {
    url: "https://mega.nz/embed/UftzRLZZ#wVc2czIMpo5Yu4FOH4JTW6Ln3YjGvJTeaD98L4lTG0s"
  },
  {
    url: "https://mega.nz/embed/QfE3iSyS#Hb-3s35Q8htVgVVCMTcBOHFJSdOeEMBpxPanNmg1D58"
  },
  {
    url:'https://mega.nz/embed/VOcVmSxQ#b0EwCPNS_owy2rkWRmJSUmv6N5mHI3LzJVTMnSVFE3w'
  }
];

const reducer = (state, action) => {
  switch (action.type) {
    case 'incrementWidth':
      return { ...state, width: parseInt(state.width + 50 )};
    case 'decrementWidth':
      return { ...state, width: parseInt(state.width - 50 )};
    case 'incrementHeight':
      return { ...state, height: parseInt(state.height + 50) };
    case 'decrementHeight':
      return { ...state, height: parseInt(state.height - 50 )};
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
      {urlData.map((each, index) => {
        return (
          <li key={index}>
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
                  controls
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
