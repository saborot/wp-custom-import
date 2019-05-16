import React from 'react';

const InputList = (props) => (

	props.list.map((value) => {

      if ( props.excluded.includes(value) )
         return <span><input type="checkbox" /> {value}</span>;
      else
         return <span><input type="checkbox" checked /> {value}</span>;
   })
);

export default InputList;