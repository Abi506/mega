import React, { useReducer } from 'react';

const initialState = {
  width: window.innerWidth,  // Width and height as numbers, not strings
  height: 500,
};

const urlData = [
  {
    url: "https://mega.nz/embed/RaV1iS4A#FRye6RCbyO1GZVNkgG1Tnm6dfVYr5NO7ngpMGmUFFGs"
  },
  {   
    url: "https://mega.nz/embed/IX1H1A4D#E069qM0JefYBv8X-Ncw3NSI-59HGSiuDFnnoU1j2N_M"
  },
  {
    url: "https://mega.nz/embed/kW8AWB5Z#py5KLkY60rSSPfo-4KFUU44c3dSTYP79Lsk_igJaecY"
  },
  {
    url: "https://mega.nz/embed/4fV1STBA#XP15kITFKvJgb2dQxRW7bVDrc4qhqZ_QkFfwhOPbDPw"
  },
  {
    url: "https://mega.nz/embed/RfsxnSDS#rPwEqCmiqK7nAsGPGf_N71REAzmPlrscp3YBzYxNG58"
  },
  {
    url:"https://drive.google.com/file/d/10hkruk9A7W1Gcokg-R3K6pnbyvdG-RDH/preview",
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

const Home = () => {
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
      <h1>Japanese</h1>
      <a href='/indian'><button>Indian</button></a>
      <a href='/korean'><button>Drive Korean </button></a>
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
                  frameBorder="0"
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

export default Home;
