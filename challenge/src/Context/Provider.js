import React, { useState } from 'react';
import Context from './Context';
// import data from '../data/API/data.json';


export default function Provider({ children }) {

  const [searchText, setSearchText] = useState('');
  // const [project, updateProject] = useState([]);
  
   const filterMap = (data, key) => {
    const filterName = data.filter((n) => n[key].toLowerCase().includes(searchText.toLowerCase()));
    return filterName;
  };

  // useEffect(() => {
  //   async function fetchA() {
  //     const {equipaments} = await data.json();
  //     updateProject(equipaments);
  //     console.log(equipaments);
  //   }
  //   fetchA();
  // }, []);


    const valuesContext = {
    searchText,
    setSearchText,
    filterMap,
    // project,
  
    };

  return (
    <Context.Provider value={ valuesContext }>
      {children}
    </Context.Provider>
  );
}

