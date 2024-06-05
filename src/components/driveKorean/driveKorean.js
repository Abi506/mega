import React, { useReducer } from 'react';

const initialState = {
  width: 1000,
  height: 500,
};

const urlData = [
  {
    url: "https://drive.google.com/file/d/1-UyyirmY42FOsCMBX9cjbU9J8alifUJQ/preview",
    name:"Korean cam girl slut island exclusive camshow asian perfect milf"
  },
  {   
    url: "https://drive.google.com/file/d/1-JeCSUce6XxWriRIn09jtuPsApc00V3N/preview",
    name:"Female hostel 3 2019"
  },
  {
    url: "https://drive.google.com/file/d/1-5jAEww0s5Z0zigzTAldK3oa7bNO2Vg3/preview",
    name:"High Class oil salon"
  },
  {
    url: "https://drive.google.com/file/d/1-T9pKmmX5cl9vEUCgOBW5saKD1_4jFSy/preview",
    name:"My student mom korea 18"
  },
  {
    url: "https://drive.google.com/file/d/1-HJzCdYHnvxx6Ff9jVVU_6ZLRi4xCDZo/preview",
    name:"My Wifes New Mom"
  },
  {
    url: "https://drive.google.com/file/d/1-7NF3s1RfZRr9CPzmWs4_Bx7aWqyS2mw/preview",
    name:"Yonju valley 2"
  },
  {
    url: "https://drive.google.com/file/d/1-B7Zh9CsMRd2OOg-zYpbWSQEcsPisSH-/preview",
    name:"Young Mothers Secret Sex 2023"
  },
  {
    url: "https://drive.google.com/file/d/1-9XSgSy2B7KWT5hA1ZO_VxEDmW4Vcky_/preview",
    name:"My Wife's new Sister"
  },
  {
    url:"https://drive.google.com/file/d/1-fBIvOsTGggbtEfUkPu_E5cT3EpaFTDk/preview",
    name:"Stalking Girl Next Door"
  },
  {
    url:"https://drive.google.com/file/d/1-qSCZe8dbQCTnmYZT63wmdPa9Tl01DM4/preview",
    name:"Family Reconstruction 2017"
  }
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
      <h1>Korean</h1>
      <a href='/'><button>Japanese</button></a>
      <a href='/indian'><button>Indian</button></a>
      {urlData.map((each, index) => {
        return (
          <li key={index}>
            <h1>{each.name}</h1>
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
