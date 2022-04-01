import React, { useEffect, useState } from 'react'; 
import {makeStyles} from '@material-ui/core';
import Select from 'react-select';

function Customer  ()  {
  const data = [
    {
      value: 1,
      label:"1st June 2022-May 31st 2021"
    },
    {
      value: 2,
      label:"1st June 2022-May 31st 2024"
    },
    {
      value: 3,
      label:"1st June 2021-May 31st 2022"
    }

  ];

  const [selectedValue,setSelectedValue]=useState(null);

  const handleChange = obj => {
    setSelectedValue(obj);
  }
    return (
        <> 
        <div style={{display:'flex',justifyContent:'center',alignItems:'center',height:'100vh'}}>
        Scheme
          <Select
          value={selectedValue}
          options={data}
          onChange={handleChange}
        
          />  
          <b>Selected value:</b>
          <pre>{JSON.stringify(selectedValue,null,2)}</pre>
          </div> 
        </>
    );
}

export default Customer;