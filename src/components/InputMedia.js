import React from 'react';

const InputMedia = (props) => (
	<div className="grid-autofill">{props.label}: <input type='file' name={props.name} /></div>
);

export default InputMedia;