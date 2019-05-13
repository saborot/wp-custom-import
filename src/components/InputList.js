import React from 'react';

const createListItem = ({name, value}) => (

	<div><input type='checkbox' checked={value} /> {name}</div>
);

const InputList = (props) => (

	props.list.map(createListItem)
);

export default InputList;